import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import {
  Edit,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "95%",
  },
}));
const EditBesoin = (props) => {
  // console.log(props.record.Etat);
  // const isEtatPending = props.record?.id === "Pending";
  const EditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton id="save" />
    </Toolbar>
  );

  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="Besoin" className={classes.inputSize} />
        <TextInput source="Description" className={classes.inputSize} />
        <ReferenceInput
          source="MaterielID"
          reference="Materiels"
          className={classes.inputSize}
          perPage={400}
        >
          <SelectInput optionText="Materiel" />
        </ReferenceInput>
        <ReferenceInput
          source="CentreId"
          reference="centres"
          className={classes.inputSize}
          perPage={400}
        >
          <SelectInput optionText="Centre" />
        </ReferenceInput>
        <SelectInput
          source="Etat"
          className={classes.inputSize}
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
