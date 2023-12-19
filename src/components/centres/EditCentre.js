import {
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
const EditCentre = () => {
  return (
    <Edit Toolbar={<EditToolbar />}>
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
    </Edit>
  );
};

export default EditCentre;
