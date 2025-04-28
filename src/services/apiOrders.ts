import { Order, Status } from "../types/types";
import supabase from "./supabase";
import { PER_PAGE } from "../utils/constants";

export async function getOrders(
  page: number,
): Promise<{ orders: Order[]; count: number }> {
  let query = supabase
    .from("orders")
    .select("*, order_items(product_id, quantity)", { count: "exact" });

  if (page) {
    const from = (page - 1) * PER_PAGE;
    const to = from + PER_PAGE - 1;

    query = query.range(from, to);
  }

  const { data: orders, error: ordersError, count } = await query;

  if (ordersError) throw new Error("Couldn't fetch orders.");

  const ids = orders
    .map((orders) =>
      orders.order_items.map(
        (item: { product_id: number; quantity: number }) => item?.product_id,
      ),
    )
    .flat(1);

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (productsError) throw new Error("Couldn't fetch products.");

  const ordersWithProducts = orders.map((order) => {
    const orderItems = order.order_items.map(
      (item: { product_id: number; quantity: number }) => {
        const product = products.find(
          (product) => product.id === item.product_id,
        );
        return { ...product, quantity: item.quantity };
      },
    );

    return { ...order, order_items: orderItems };
  });

  return { orders: ordersWithProducts, count: Number(count) };
}

export async function getOrderById(id: number): Promise<Order> {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*, order_items(product_id, quantity)")
    .eq("id", id)
    .single();

  if (orderError) throw new Error("Couldn't find order with given id");

  const ids = order.order_items.map(
    (item: { product_id: number; quantity: number }) => item.product_id,
  );
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (productsError) throw new Error("Couldn't fetch products.");

  const orderItems = order.order_items.map(
    (item: { product_id: number; quantity: number }) => {
      const product = products.find(
        (product) => product.id === item.product_id,
      );
      return { ...product, quantity: item.quantity };
    },
  );

  return { ...order, order_items: orderItems };
}

export async function updateOrderStatus({
  id,
  status,
}: {
  id: number;
  status: Status;
}): Promise<{ id: number; status: Status }> {
  const { error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error("There was an error updating the order status");

  return { id, status };
}

export async function cancelOrder(id: number): Promise<void> {
  const { error } = await supabase.from("orders").delete().eq("id", id);

  if (error) throw new Error("There was an error cancelling the order");
}

export async function getOrdersStats(): Promise<{
  numOrders: number;
  toBeShipped: number;
  ordersToday: number;
}> {
  const { count: numOrders, error } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error("Couldn't fetch stats.");

  const { count: pendingOrders, error: pendingOrdersError } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  if (pendingOrdersError) throw new Error("Couldn't fetch stats.");

  const twentyFourHoursAgo = new Date(
    Date.now() - 24 * 60 * 60 * 1000,
  ).toISOString();

  const { count: ordersToday, error: todayOrdersError } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true })
    .gte("created_at", twentyFourHoursAgo);

  if (todayOrdersError) throw new Error("Couldn't fetch stats.");

  return {
    numOrders: Number(numOrders),
    toBeShipped: Number(pendingOrders),
    ordersToday: Number(ordersToday),
  };
}
