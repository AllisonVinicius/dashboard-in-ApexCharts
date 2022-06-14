import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphBarras = () => {
  const { innerWidth: width, innerHeight: height } = window;

  const widthWindows = useMemo(() => {
    let widValue = null;
    if (width >= 768) {
      widValue = 570;
      return widValue;
    } else {
      widValue = 280;
      return widValue;
    }
  }, [width]);

  const heightWindows = useMemo(() => {
    let heiValue = null;

    if (height > 500) {
      heiValue = 300;
      return heiValue;
    } else {
      heiValue = 150;
      return heiValue;
    }
  }, [height]);

  return (
    <Container>
      <TextHeader title="Barras" />

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={widthWindows}
        height={heightWindows}
      />
    </Container>
  );
};

export default GraphBarras;
