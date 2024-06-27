import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DispatchWhereInput = {
  dispatchDate?: DateTimeNullableFilter;
  dispatchNumber?: StringNullableFilter;
  id?: StringFilter;
};
