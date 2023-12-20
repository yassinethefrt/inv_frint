import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
const CreateEquipement = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="MaterielID" perPage={400} reference="materiels">
          <SelectInput optionText="Materiel" />
        </ReferenceInput>
        <TextInput source="Description" />
        {/* <TextInput multiline source="description" /> */}
        {/* <TextInput source="description" multiline /> */}

        <ReferenceInput
          source="CentreId"
          reference="centres"
          perPage={400}
          required
        >
          <SelectInput optionText="Centre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateEquipement;
