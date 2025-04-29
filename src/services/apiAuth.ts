import { LoginData } from "../types/types";
import supabase from "./supabase";

export async function login({ email, password }: LoginData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error("Invalid credentials");

  const { data: roleData } = await supabase.from("user_roles").select("*");

  if (!roleData?.length) {
    const { error: logoutErr } = await supabase.auth.signOut();
    if (logoutErr) throw new Error("An error occured.");

    throw new Error(
      "You're trying to login with user account. Try again with admin account.",
    );
  }

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
