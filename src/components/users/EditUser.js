import {
  DateInput,
  Edit,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  PasswordInput,
  TextInput,
  Toolbar,
  required,
  EmailField,
} from "react-admin";

import React from "react";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
const EditUser = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="fullname" />
        <TextInput source="username" />
        {/* <PasswordInput source="Password" /> */}

        <SelectInput
          source="Role"
          allowEmpty
          choices={[
            // { id: "SuperAdmin", name: "SuperAdmin" },
            { id: "Admin", name: "Admin" },
            { id: "User", name: "User" },
          ]}
        />
        <SelectInput
          source="isActivated"
          choices={[
            { id: "true", name: "activer" },
            { id: "false", name: "desactiver" },
          ]}
        />
        <DateInput source="created" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
