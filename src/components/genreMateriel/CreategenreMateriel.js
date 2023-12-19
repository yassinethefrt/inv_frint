import React from "react";
import { Create, Datagrid, SimpleForm, TextInput } from "react-admin";

const CreategenreMateriel = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="GenreMateriel" />
      </SimpleForm>
    </Create>
  );
};

export default CreategenreMateriel;
