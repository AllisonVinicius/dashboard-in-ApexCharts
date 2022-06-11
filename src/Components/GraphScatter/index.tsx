import React from "react";
import ReactApexChart from "react-apexcharts";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphScatter = () => (
  <Container>
    <TextHeader title="Scatter" />
    <ReactApexChart
      options={options}
      series={series}
      type="scatter"
      height={350}
      width={450}
    />
  </Container>
);

export default GraphScatter;
