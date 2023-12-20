import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function TableEquipements() {
  let apiUrl = "https://api-inventaire-x8sq.onrender.com/equipementsData";

  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return; // or any loading indicator you prefer
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 550, margin: " auto", marginBottom: 12 }}
    >
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>etablissement </TableCell>
            <TableCell align="right">nombre equipement</TableCell>
            <TableCell align="right">categoires</TableCell>
            <TableCell align="right">Total par categorie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x) => (
            <TableRow
              key={x.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {x.etablissement}
              </TableCell>
              <TableCell align="right">{x.nb_equipement}</TableCell>
              <TableCell align="right">{x.most_common_categorie}</TableCell>
              <TableCell align="right">{x.total}</TableCell>
              <TableCell align="right">{x.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
