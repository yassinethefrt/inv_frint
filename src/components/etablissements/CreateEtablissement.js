import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreateEtablissement = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="Etablissement" required />
        {/* <TextInput source="RegionId" required /> */}
        <ReferenceInput source="RegionId" reference="Regions" perPage={200}>
          <SelectInput optionText="Region" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateEtablissement;
