import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Grid, ListItem } from "@material-ui/core";

const MaterielDashbord = () => {
  const [chartData, setChartData] = useState([]);
  let apiUrl2 = "http://localhost:8081/materielChart";

  useEffect(() => {
    axios
      .get(apiUrl2)
      .then((response) => {
        setChartData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl2]);

  useEffect(() => {
    if (chartData.length === 0) return;

    const ctx = document.getElementById("myDoughnut").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: chartData.map((item) => item.GenreMateriel),
        datasets: [
          {
            label: "Materiels",
            data: chartData.map((item) => item.nb_mateirels),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return (
    <div
      style={{
        height: "auto",
        width: "500px",
        margin: "auto",
        padding: "5% 0",
      }}
    >
      <canvas id="myDoughnut"></canvas>
    </div>
  );
};

export default MaterielDashbord;
