import React from "react";
import {
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CreatePersonel = () => {
  return (
    <Create>
      <SimpleForm
      // style={{
      //   display: "grid",
      //   width: "90%",
      //   gridTemplateColumns: "repeat(2, 1fr)",
      // }}
      >
        <TextInput source="Nom" required />
        <TextInput source="Prenom" required />
        <TextInput source="Cin" required />
        <DateInput source="DateNaissance" required />
        <TextInput source="Matricule" required />
        <TextInput source="Grade" required />
        <TextInput source="Mission" required />
        <DateInput source="DateAffectation" required />
        <ReferenceInput
          source="EtablissementId"
          reference="Etablissements"
          required
        >
          <SelectInput optionText="Etablissement" />
        </ReferenceInput>
        <ReferenceInput source="CentreId" reference="centres" required>
          <SelectInput optionText="Centre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreatePersonel;
