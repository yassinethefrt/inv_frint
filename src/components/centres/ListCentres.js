import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
  useTranslate,
} from "react-admin";
const ListCentres = (props) => {
  const translate = useTranslate();
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField
          source="Centre"
          label={translate("ra.resources.centres.fields.centre")}
        />

        <TextField
          source="Etablissement"
          label={translate("ra.resources.centres.fields.etablissements")}
        />

        <TextField
          source="Region"
          label={translate("ra.resources.centres.fields.ville")}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ListCentres;
