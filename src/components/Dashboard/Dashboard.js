import BoxesTotal from "./BoxesTotal";
import MaterielDashbord from "./MaterielDashbord";
import PersonnelsDashboard from "./PersonnelsDashboard";
// import BasicTable from "./TableEquipements";
import TableEquipements from "./TableEquipements";
import TablePersonnels from "./TablePersonnels";

const Dashboard = () => {
  return (
    <div>
      {/* <BoxesTotal /> */}
      <PersonnelsDashboard />
      <TablePersonnels />
      <MaterielDashbord />
      <TableEquipements />
    </div>
  );
};

export default Dashboard;
