import React from "react";
import { Filter, TextInput } from "react-admin";

const FilterPersonel = (props) => {
  return (
    <Filter {...props}>
      <TextInput source="nom" alwaysOn />
      {/* <TextInput source="prenom" /> */}
      <TextInput source="q" label="search" />
      {/* <TextInput source="cin" alwaysOn /> */}
      {/* <TextInput source="matricule" alwaysOn /> */}
    </Filter>
  );
};

export default FilterPersonel;
