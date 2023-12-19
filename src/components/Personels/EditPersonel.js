import React from "react";
import {
  DateInput,
  Edit,
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
const EditPersonel = () => {
  return (
    <Edit Toolbar={<EditToolbar />}>
      <SimpleForm>
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
    </Edit>
  );
};

export default EditPersonel;
