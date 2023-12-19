import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function TablePersonnels() {
  let apiUrl = "http://localhost:8081/personnelData";

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
      sx={{ maxWidth: 750, margin: " auto", marginBottom: 12 }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Grade </TableCell>
            <TableCell align="right">Mission</TableCell>
            <TableCell align="right">Moyene d'age</TableCell>
            <TableCell align="right">Total par mission</TableCell>
            <TableCell align="right">Total par grade</TableCell>
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
                  {x.Grade}
                </TableCell>
                <TableCell align="right">{x.Mission}</TableCell>
                <TableCell align="right">{x.averageAge}</TableCell>
                <TableCell align="right">{x.uniqueMissionCount}</TableCell>
                <TableCell align="right">{x.uniqueGradeCount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
