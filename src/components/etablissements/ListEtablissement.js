import React from "react";
import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  useTranslate,
} from "react-admin";

const ListEtablissement = (props) => {
  const translate = useTranslate();
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField
          source="Etablissement"
          label={translate("ra.resources.etablissements.fields.etablissements")}
        />
        <TextField
          source="Region"
          label={translate("ra.resources.etablissements.fields.ville")}
        />
      </Datagrid>
    </List>
  );
};

export default ListEtablissement;
