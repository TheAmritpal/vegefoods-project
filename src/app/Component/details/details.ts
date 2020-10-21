export interface Product {
  id: number;
  product: string;
  quantity: number;
  total: number;
}
export interface ProductDetails {
  [key: number]: Product;
}
