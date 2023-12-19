import React from "react";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);

const EditMateriel = () => {
  return (
    <Edit Toolbar={<EditToolbar />}>
      <SimpleForm>
        <TextInput source="Materiel" required />
        <ReferenceInput source="GenreMateriel" reference="GenreMateriel">
          <SelectInput optionText="GenreMateriel" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditMateriel;
