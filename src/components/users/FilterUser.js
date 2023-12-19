import React from "react";
import { Filter, SelectInput, TextInput } from "react-admin";

const FilterUser = (props) => {
  return (
    <Filter {...props}>
      <TextInput source="fullname" />
      <TextInput source="username" />
      <TextInput source="Role" />
      <SelectInput
        source="isActivated"
        choices={[
          { id: "true", name: "activer" },
          { id: "false", name: "desactiver" },
          //   { id: "photography", name: "Photography" },
        ]}
      />
    </Filter>
  );
};

export default FilterUser;
