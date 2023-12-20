import React from "react";
import {
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  List,
  TextField,
  TopToolbar,
  useTranslate,
} from "react-admin";
import { ImportButton } from "react-admin-import-csv";

const ListActions = (props) => {
  const {
    className,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
  } = props;
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filter={filterValues}
        exporter={exporter}
      />
      <ImportButton {...props} />
    </TopToolbar>
  );
};

const ListPersonel = (props) => {
  const translate = useTranslate();
  return (
    <List actions={<ListActions />}>
      <Datagrid bulkActionButtons={false} {...props} rowClick="edit">
        <TextField
          source="Nom"
          label={translate("ra.resources.personnels.fields.nom")}
        />
        <TextField
          source="Prenom"
          label={translate("ra.resources.personnels.fields.prenom")}
        />
        <TextField
          source="Cin"
          label={translate("ra.resources.personnels.fields.cin")}
        />
        <DateField
          source="DateNaissance"
          label={translate("ra.resources.personnels.fields.dateNaissance")}
        />
        <TextField
          source="Matricule"
          label={translate("ra.resources.personnels.fields.matricule")}
        />
        <TextField
          source="Grade"
          label={translate("ra.resources.personnels.fields.grade")}
        />
        <TextField
          source="Mission"
          label={translate("ra.resources.personnels.fields.mission")}
        />
        <DateField
          source="DateAffectation"
          label={translate("ra.resources.personnels.fields.dateAffectation")}
        />
        <TextField
          source="Etablissement"
          label={translate("ra.resources.personnels.fields.Etablissement")}
        />
        <TextField
          source="Centre"
          label={translate("ra.resources.personnels.fields.Centre")}
        />
      </Datagrid>
    </List>
  );
};

export default ListPersonel;
