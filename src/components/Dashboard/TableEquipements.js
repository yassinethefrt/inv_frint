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
  let apiUrl = "http://localhost:8081/equipementsData";

  const [data, setData] = React.useState("");
  React.useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);
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
          {data &&
            data.map((x) => (
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
