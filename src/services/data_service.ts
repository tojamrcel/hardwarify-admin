import supabase from "./supabase";

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("id, email, status, total_price, address, user_id");

  if (error) throw new Error(error.message);

  return data;
}
