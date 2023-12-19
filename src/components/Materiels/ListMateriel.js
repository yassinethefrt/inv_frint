import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  ShowButton,
  TextField,
  useTranslate,
} from "react-admin";

const ListMateriel = (props) => {
  const translate = useTranslate();
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField
          source="Materiel"
          label={translate("ra.resources.materiels.fields.materiel")}
        />
        <TextField
          source="GenreMateriel"
          label={translate("ra.resources.materiels.fields.categorie_materiel")}
        />
        <EditButton />
        {/* <DeleteButton /> */}
      </Datagrid>
    </List>
  );
};

export default ListMateriel;
