import React from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import { Container } from "./styles";

const GraphBarras = () => {
  return (
    <Container>
      {/* <Header>Graph Barras</Header> */}
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={290}
        width={400}
      />
    </Container>
  );
};

export default GraphBarras;
