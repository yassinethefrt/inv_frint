import React from "react";
import {
  CreateButton,
  Datagrid,
  ExportButton,
  List,
  ReferenceField,
  TextField,
  TopToolbar,
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

const ListVilles = (props) => {
  return (
    <List {...props} actions={<ListActions />}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="ville" />
      </Datagrid>
    </List>
  );
};

export default ListVilles;
