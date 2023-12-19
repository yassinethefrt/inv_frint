import { Datagrid, List, TextField } from "react-admin";

export const GenrematerielList = () => (
  <List>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="GenreMateriel" />
    </Datagrid>
  </List>
);
