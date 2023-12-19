import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiUsers } from "react-icons/fi";
import { TfiBriefcase } from "react-icons/tfi";

const BoxesTotal = () => {
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        margin: "3%",
      }}
    >
      <Card sx={{ width: "30%", marginTop: "3%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <FiUsers />
            Personnels
          </Typography>
          <Typography variant="h5" component="div">
            Nombre Total Personnels :
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            4
          </Typography>
          <Typography variant="body2"></Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "30%", marginTop: "3%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <TfiBriefcase />
            Materiels
          </Typography>
          <Typography variant="h5" component="div">
            Nombre Total Materiels :
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            6
          </Typography>
          <Typography variant="body2"></Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoxesTotal;
