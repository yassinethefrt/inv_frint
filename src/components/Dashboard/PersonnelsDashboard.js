import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const PersonnelsDashboard = () => {
  const [chartData, setChartData] = useState([]);
  let apiUrl = "https://api-inventaire-x8sq.onrender.com/personnelChart";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setChartData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);

  useEffect(() => {
    if (chartData.length === 0) return;

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartData.map((item) => item.year),
        datasets: [
          {
            label: "Personels",
            data: chartData.map((item) => item.count),
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
        width: "800px",
        height: "auto",
        margin: "auto",
        padding: "8% 0",
      }}
    >
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default PersonnelsDashboard;
