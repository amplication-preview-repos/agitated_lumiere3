import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="createdDate" source="createdDate" />
        <div />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Edit>
  );
};
