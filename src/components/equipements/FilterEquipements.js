import React from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";

const FilterEquipements = (props) => {
  return (
    <Filter {...props}>
      <TextInput source="equipement" />
      {/* <TextInput source="prenom" /> */}
      <ReferenceInput source="categorie" reference="materiels" perPage={200}>
        <SelectInput optionText="categorie_materiel" />
      </ReferenceInput>
      {/* <TextInput source="cin" alwaysOn /> */}
      {/* <TextInput source="matricule" alwaysOn /> */}
    </Filter>
  );
};

export default FilterEquipements;
