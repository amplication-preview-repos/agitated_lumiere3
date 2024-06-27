export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
