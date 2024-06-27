import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  reportName?: SortOrder;
  updatedAt?: SortOrder;
};
