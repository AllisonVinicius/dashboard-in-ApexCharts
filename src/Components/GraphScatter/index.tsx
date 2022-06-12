import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../../repositories/scatter";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphScatter = () => {
  return (
    <Container>
      <TextHeader title="Scatter" />
      <ReactApexChart
        options={options}
        series={options.series}
        type="scatter"
        height={350}
        width={450}
      />
    </Container>
  );
};

export default GraphScatter;
