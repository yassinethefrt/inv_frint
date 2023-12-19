import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreateCentre = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="Centre" required />
        <ReferenceInput
          source="EtablissementId"
          reference="etablissements"
          perPage={200}
        >
          <SelectInput optionText="Etablissement" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateCentre;
