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
