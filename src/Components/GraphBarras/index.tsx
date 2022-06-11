import React from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphBarras = () => {
  return (
    <Container>
      <TextHeader title="Barras" />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="350"
        height="300"
      />
    </Container>
  );
};

export default GraphBarras;
