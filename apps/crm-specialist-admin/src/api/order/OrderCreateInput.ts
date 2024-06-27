export type OrderCreateInput = {
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
