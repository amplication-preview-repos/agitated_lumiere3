import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "reportName";

export const ReportTitle = (record: TReport): string => {
  return record.reportName?.toString() || String(record.id);
};
