import { Order, Status } from "../types/types";
import supabase from "./supabase";

export async function getOrders(): Promise<Order[]> {
  const { data: orders, error: ordersError } = await supabase
    .from("orders")
    .select("*, order_items(product_id, quantity)");

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

  return ordersWithProducts;
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
