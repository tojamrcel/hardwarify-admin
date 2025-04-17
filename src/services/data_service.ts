import { LoginData, NewProduct, Order, Product, Status } from "../types/types";
import { SUPABASE_URL } from "../utils/constants";
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

export async function createProduct(product: NewProduct) {
  const { product_name, image } = product;
  const img = image[0];

  const imageName = `${Math.floor(Math.random() * 1000)}-${product_name.split(" ").join("-")}-${img.name}`;
  const path = `${SUPABASE_URL}/storage/v1/object/public/products_images/${imageName}`;
  const id = Date.now() + Math.floor(Math.random() * 1000);

  const { error: storageErr } = await supabase.storage
    .from("products_images")
    .upload(imageName, img, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageErr) throw new Error("Could not create product.");

  const newProduct: Product = { ...product, id, image: path };
  const { data, error } = await supabase
    .from("products")
    .insert(newProduct)
    .select("*")
    .single();

  if (error) throw new Error("Could not create product.");
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

export async function getCategories() {
  const { data, error } = await supabase.from("products").select("category");

  if (error) throw new Error("Couldn't fetch categories.");

  return [...new Set(data.map((item) => item.category))];
}
