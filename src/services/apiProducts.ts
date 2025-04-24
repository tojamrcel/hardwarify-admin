import { NewProduct, Product } from "../types/types";
import { SUPABASE_URL } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*, bestsellers(id)");

  if (error) throw new Error("Couldn't fetch products.");

  const products = data.map(({ bestsellers, ...product }) => ({
    ...product,
    isBestseller: bestsellers.length > 0,
  }));

  return products;
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

export async function deleteProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select();

  if (!data || !data?.length || error)
    throw new Error("Couldn't delete order.");

  return data;
}

export async function updateProduct(product: Product) {
  const { data, error } = await supabase
    .from("products")
    .update({
      product_name: product.product_name,
      description: product.description,
      category: product.category,
      regular_price: product.regular_price,
      discount: product.discount,
      availability: product.availability,
    })
    .eq("id", product.id)
    .select();

  if (error) throw new Error("There was an error while updating the product.");

  return data;
}

export async function getCategories() {
  const { data, error } = await supabase.from("products").select("category");

  if (error) throw new Error("Couldn't fetch categories.");

  return [...new Set(data.map((item) => item.category))];
}
