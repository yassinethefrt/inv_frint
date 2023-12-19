import React from "react";
import {
  Create,
  DateInput,
  EmailField,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  usePermissions,
} from "react-admin";

const CreateUser = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="fullname" />
        <TextInput source="username" />
        <PasswordInput source="password" />

        <SelectInput
          source="role"
          allowEmpty
          choices={[
            { id: "Admin", name: "Admin" },
            { id: "User", name: "User" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateUser;
