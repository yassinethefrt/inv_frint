import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import {
  DateInput,
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
const useStyles = makeStyles(() => ({
  inputSize: {
    width: "95%",
  },
}));
const EditPersonel = () => {
  const classes = useStyles();
  return (
    <Edit Toolbar={<EditToolbar />}>
      <SimpleForm>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Nom" required className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Prenom" required className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Cin" required className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateNaissance"
              required
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput source="Grade" required className={classes.inputSize} />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextInput
              source="Mission"
              required
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <DateInput
              source="DateAffectation"
              required
              className={classes.inputSize}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <ReferenceInput
              source="EtablissementId"
              reference="Etablissements"
              required
              className={classes.inputSize}
            >
              <SelectInput
                optionText="Etablissement"
                className={classes.inputSize}
              />
            </ReferenceInput>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <ReferenceInput source="CentreId" reference="centres" required>
              <SelectInput
                optionText="Centre"
                className={classes.inputSize}
                required
              />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditPersonel;
