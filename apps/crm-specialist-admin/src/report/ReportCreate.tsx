import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="createdDate" source="createdDate" />
        <div />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Create>
  );
};
