import { Edit, SimpleForm, TextInput } from "react-admin";

export const GenrematerielEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="GenreMateriel" />
    </SimpleForm>
  </Edit>
);
