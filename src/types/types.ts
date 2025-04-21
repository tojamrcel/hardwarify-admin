export type Status = "pending" | "sent" | "delivered";

export interface Product {
  id: number;
  product_name: string;
  description: string;
  regular_price: number;
  image: string;
  category: string;
  discount: number | null;
  availability: number;
  quantity?: number;
}

export interface NewProduct {
  id?: number;
  product_name: string;
  description: string;
  regular_price: number;
  image: FileList;
  category: string;
  discount: number | null;
  availability: number;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Order {
  id: number;
  created_at: string;
  email: string;
  status: Status;
  total_price: number;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  address: string;
  order_items: Product[];
}
