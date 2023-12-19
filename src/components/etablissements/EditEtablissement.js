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
const EditEtablissement = () => {
  return (
    <Edit Toolbar={<EditToolbar />}>
      <SimpleForm>
        <TextInput source="id" disabled />

        <TextInput source="Etablissement" required />

        <ReferenceInput source="RegionId" reference="Regions" perPage={200}>
          <SelectInput optionText="Region" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditEtablissement;
