import { Dispatch as TDispatch } from "../api/dispatch/Dispatch";

export const DISPATCH_TITLE_FIELD = "dispatchNumber";

export const DispatchTitle = (record: TDispatch): string => {
  return record.dispatchNumber?.toString() || String(record.id);
};
