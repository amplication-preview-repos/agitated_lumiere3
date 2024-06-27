import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderNumber" source="orderNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
