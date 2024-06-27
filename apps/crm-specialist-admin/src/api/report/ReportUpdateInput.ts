import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  createdDate?: Date | null;
  data?: InputJsonValue;
  reportName?: string | null;
};
