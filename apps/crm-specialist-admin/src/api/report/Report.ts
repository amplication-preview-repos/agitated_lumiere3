import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  createdDate: Date | null;
  data: JsonValue;
  id: string;
  reportName: string | null;
  updatedAt: Date;
};
