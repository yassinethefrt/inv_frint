import { makeStyles } from "@material-ui/styles";
import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
const useStyles = makeStyles(() => ({
  inputSize: {
    width: "45%",
  },
}));
const CreateBesoin = () => {
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <TextInput source="Besoin" className={classes.inputSize} />
        <TextInput source="Description" className={classes.inputSize} />
        <ReferenceInput
          source="MaterielID"
          reference="Materiels"
          className={classes.inputSize}
          perPage={400}
        >
          <SelectInput optionText="Materiel" className={classes.inputSize} />
        </ReferenceInput>
        <ReferenceInput
          source="CentreId"
          reference="centres"
          className={classes.inputSize}
          perPage={400}
        >
          <SelectInput optionText="Centre" className={classes.inputSize} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateBesoin;
