import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphBarras = () => {
  const { innerWidth: width } = window;

  const widthWindows = useMemo(() => {
    let widValue = null;
    if (width >= 768) {
      widValue = 600;
      return widValue;
    } else {
      widValue = 290;
      return widValue;
    }
  }, [width]);

  return (
    <Container>
      <TextHeader title="Barras" />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={widthWindows}
        height={300}
      />
    </Container>
  );
};

export default GraphBarras;
