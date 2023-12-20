import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";

export const GenrematerielEdit = () => {
  const EditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton id="save" />
    </Toolbar>
  );
  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="id" disabled />
        <TextInput source="GenreMateriel" />
      </SimpleForm>
    </Edit>
  );
};
