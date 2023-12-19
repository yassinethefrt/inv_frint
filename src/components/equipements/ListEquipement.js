import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  useTranslate,
} from "react-admin";
import FilterEquipements from "./FilterEquipements";

const ListEquipement = (props) => {
  const translate = useTranslate();
  return (
    <List filters={<FilterEquipements />}>
      <Datagrid bulkActionButtons={false} rowClick="edit" {...props}>
        {/* <TextField source="id" /> */}
        <TextField
          source="Materiel"
          label={translate("ra.resources.equipements.fields.equipement")}
        />
        <TextField
          source="Description"
          label={translate("ra.resources.equipements.fields.desc")}
        />
        <TextField
          source="GenreMateriel"
          label={translate("ra.resources.equipements.fields.materiel")}
        />
        <TextField
          source="Centre"
          label={translate("ra.resources.equipements.fields.centre")}
        />
        <TextField
          source="Etablissement"
          label={translate("ra.resources.personnels.fields.Etablissement")}
        />
        <DateField source="CreatedAt" />
      </Datagrid>
    </List>
  );
};

export default ListEquipement;
