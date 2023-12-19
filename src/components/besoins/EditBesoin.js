import React, { useState } from "react";
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const EditBesoin = (props) => {
  // console.log(props.record.Etat);
  // const isEtatPending = props.record?.id === "Pending";
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="Besoin" />
        <TextInput source="Description" />
        <ReferenceInput source="MaterielID" reference="Materiels">
          <SelectInput optionText="Materiel" />
        </ReferenceInput>
        <ReferenceInput source="CentreId" reference="centres">
          <SelectInput optionText="Centre" />
        </ReferenceInput>
        <SelectInput
          source="Etat"
          // disabled={!Pending}
          choices={[
            { id: "Pending", name: "Pending | قيد الانتظار" },
            { id: "Aprouve", name: "Approuvé | مصادق" },
            { id: "Annuler", name: "Annuler | ملغى" },
          ]}
          // disabled={isEtatPending}
        />
      </SimpleForm>
    </Edit>
  );
};

export default EditBesoin;
