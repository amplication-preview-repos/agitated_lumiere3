import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  createdDate?: DateTimeNullableFilter;
  data?: JsonFilter;
  id?: StringFilter;
  reportName?: StringNullableFilter;
};
