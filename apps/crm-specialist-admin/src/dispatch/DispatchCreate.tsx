import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DispatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dispatchDate" source="dispatchDate" />
        <TextInput label="dispatchNumber" source="dispatchNumber" />
      </SimpleForm>
    </Create>
  );
};
