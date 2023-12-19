import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreateBesoin = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="Besoin" />
        <TextInput source="Description" />
        <ReferenceInput source="MaterielID" reference="Materiels">
          <SelectInput optionText="Materiel" />
        </ReferenceInput>
        <ReferenceInput source="CentreId" reference="centres">
          <SelectInput optionText="Centre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateBesoin;
