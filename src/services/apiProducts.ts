import { NewProduct, Product } from "../types/types";
import { PER_PAGE, SUPABASE_URL } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts({
  searchTerm,
  page,
}: {
  searchTerm: string | undefined;
  page: number;
}): Promise<{ products: Product[]; count: number }> {
  let query = supabase
    .from("products")
    .select("*, bestsellers(id)", { count: "exact" });

  if (searchTerm) query = query.ilike("product_name", `%${searchTerm}%`);

  if (page) {
    const from = (page - 1) * PER_PAGE;
    const to = from + PER_PAGE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) throw new Error("Couldn't fetch products.");

  const products = data.map(({ bestsellers, ...product }) => ({
    ...product,
    isBestseller: bestsellers.length > 0,
  }));

  return { products, count: Number(count) };
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

export async function updateBestsellerStatus(id: number) {
  const { data: bestsellers, error: bestsellersError } = await supabase
    .from("bestsellers")
    .select("*");

  if (bestsellersError) throw new Error("Couldn't fetch bestsellers.");

  const isBestseller = Boolean(bestsellers.find((bs) => bs.product_id === id));

  if (!isBestseller) {
    const { data, error } = await supabase
      .from("bestsellers")
      .insert({ product_id: id })
      .select();

    if (error) throw new Error("Couldn't set this product as bestseller.");

    return data;
  } else {
    const { data, error } = await supabase
      .from("bestsellers")
      .delete()
      .eq("product_id", id)
      .select();

    if (error)
      throw new Error("Couldn't remove this product from bestsellers list.");

    return data;
  }
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
