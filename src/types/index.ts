export interface DessertItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends DessertItem {
  quantity: number;
}