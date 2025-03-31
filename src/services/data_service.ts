import supabase from "./supabase";

// auth
export async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: "admin@admin.com",
    password: "admin1234",
  });

  if (error) throw new Error("Invalid credentials");
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("An error occurred while logging out");
}

// products
export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Couldn't fetch products.");

  return data;
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Couldn't find product with given id");

  return data;
}

// orders
export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error("Couldn't fetch orders.");

  return data;
}

export async function getOrderById(id: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Couldn't find order with given id");

  return data;
}
