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

const EditEquipement = () => {
  return (
    <Edit Toolbar={<EditToolbar />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="MaterielID" perPage={400} reference="materiels">
          <SelectInput optionText="Materiel" />
        </ReferenceInput>
        <TextInput source="Description" />

        <ReferenceInput
          source="CentreId"
          reference="centres"
          perPage={400}
          required
        >
          <SelectInput optionText="Centre" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditEquipement;
