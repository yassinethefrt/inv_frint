import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreateMateriel = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="Materiel" required />
        <ReferenceInput
          source="GenreMateriel"
          perPage={400}
          reference="GenreMateriel"
        >
          <SelectInput optionText="GenreMateriel" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateMateriel;
