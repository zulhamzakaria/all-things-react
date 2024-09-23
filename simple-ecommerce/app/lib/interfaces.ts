export type Cart = {
  userId: string;
  item: Array<{
    id: String;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
};
