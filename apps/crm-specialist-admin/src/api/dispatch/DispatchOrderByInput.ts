import { SortOrder } from "../../util/SortOrder";

export type DispatchOrderByInput = {
  createdAt?: SortOrder;
  dispatchDate?: SortOrder;
  dispatchNumber?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
