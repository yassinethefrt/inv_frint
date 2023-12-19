import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  useTranslate,
} from "react-admin";

const ListUsers = (props) => {
  const translate = useTranslate();
  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        <TextField
          source="fullname"
          label={translate("ra.resources.users.fields.fullname")}
        />
        <TextField
          source="username"
          label={translate("ra.resources.users.fields.username")}
        />
        {/* <TextField source="Role" /> */}
        <TextField
          source="Role"
          label={translate("ra.resources.users.fields.Role")}
        />
        <FunctionField
          label="isActivated"
          render={(record) =>
            record.isActivated === "true" ? "activer" : "desactiver"
          }
        />
        <DateField
          source="created"
          label={translate("ra.resources.users.fields.created")}
        />
      </Datagrid>
    </List>
  );
};

export default ListUsers;
