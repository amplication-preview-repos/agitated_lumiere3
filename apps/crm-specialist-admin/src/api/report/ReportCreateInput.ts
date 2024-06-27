import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  createdDate?: Date | null;
  data?: InputJsonValue;
  reportName?: string | null;
};
