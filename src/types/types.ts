export interface Product {
  id: number;
  product_name: string;
  description: string;
  regular_price: number;
  image: string;
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
  status: "pending" | "sent" | "delivered";
  total_price: number;
  user_id: string;
  fisrt_name: string | null;
  last_name: string | null;
  address: string;
  orderItems: Product[];
}
