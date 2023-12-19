import React from "react";
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  useTranslate,
} from "react-admin";

const besoinRowStyle = (record, i) => {
  let etat = record.Etat;

  if (etat === "Annuler") {
    return {
      backgroundColor: "#EF4040",
    };
  }
  if (etat === "Aprouve") {
    return {
      backgroundColor: "#65B741",
    };
  }
};

const ListBesoin = (props) => {
  const translate = useTranslate();
  const renderEtat = (etat) => {
    switch (etat) {
      case "Pending":
        return "Pending | قيد الانتظار";
      case "Aprouve":
        return "Approuvé | مصادق";
      case "Annuler":
        return "Annuler | إلغاء";
      default:
        return etat;
    }
  };

  return (
    <List {...props}>
      <Datagrid
        bulkActionButtons={false}
        rowStyle={besoinRowStyle}
        rowClick="edit"
      >
        <TextField
          source="Besoin"
          label={translate("ra.resources.besoins.fields.besoins")}
        />
        <TextField
          source="Description"
          label={translate("ra.resources.besoins.fields.desc")}
        />
        <TextField
          source="Materiel"
          label={translate("ra.resources.besoins.fields.materiel")}
        />
        <TextField
          source="GenreMateriel"
          label={translate("ra.resources.besoins.fields.gm")}
        />
        <TextField
          source="Centre"
          label={translate("ra.resources.besoins.fields.centre")}
        />
        <FunctionField
          source="Etat"
          render={(record) => renderEtat(record.Etat)}
          label={translate("ra.resources.besoins.fields.etat")}
        />
        <DateField
          source="CreatedAt"
          label={translate("ra.resources.besoins.fields.created")}
        />
      </Datagrid>
    </List>
  );
};

export default ListBesoin;
