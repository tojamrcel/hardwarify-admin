import { LoginData, Order, Product } from "../types/types";
import supabase from "./supabase";
// auth
export async function login({ email, password }: LoginData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error("Invalid credentials");
  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("An error occurred while logging out");
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error("Couldn't fetch user data");

  return data?.user;
}

export async function getProfile(): Promise<{ firstName: string }> {
  const { data, error } = await supabase
    .from("profiles")
    .select("firstName")
    .single();
  if (error) throw new Error("Couldn't fetch profile data");

  return data;
}

// products
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Couldn't fetch products.");

  return data;
}

export async function getProductById(id: string): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Couldn't find product with given id");

  return data;
}

export async function getProductsByIds(ids: number[]): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (error) throw new Error("Couldn't find products with given ids");

  return data;
}

// orders
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

    return { ...order, orderItems };
  });

  return ordersWithProducts;
}

export async function getOrderById(id: string): Promise<Order> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Couldn't find order with given id");

  return data;
}
