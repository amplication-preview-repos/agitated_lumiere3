import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DispatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dispatchDate" source="dispatchDate" />
        <TextInput label="dispatchNumber" source="dispatchNumber" />
      </SimpleForm>
    </Edit>
  );
};
