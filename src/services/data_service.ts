import { LoginData, Order } from "../types/types";
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

export async function getProfile() {
  const { data, error } = await supabase
    .from("profiles")
    .select("firstName")
    .single();
  if (error) throw new Error("Couldn't fetch profile data");

  return data;
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
export async function getOrders(): Promise<Order[]> {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error("Couldn't fetch orders.");

  return data;
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
