export type Cart = {
  userId: string;
  items: Array<{
    id: String;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
};
