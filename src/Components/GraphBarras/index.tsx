import React from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "./styles";

const GraphBarras = () => {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      height: 250,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <Container>
      {/* <Header>Graph Barras</Header> */}
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={450}
      />
    </Container>
  );
};

export default GraphBarras;
