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

      <h2 style={{ textAlign: "center" }}> Materiels || التجهيزات </h2>
      <MaterielDashbord />
      <TableEquipements />
    </div>
  );
};

export default Dashboard;
