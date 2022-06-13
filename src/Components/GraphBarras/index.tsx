import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import { Container } from "./styles";

const GraphBarras = () => {
  const { innerWidth: width, innerHeight: height } = window;

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

  const heightWindows = useMemo(() => {
    let heiValue = null;

    if (height > 400) {
      heiValue = 297;
      return heiValue;
    } else {
      heiValue = 180;
      return heiValue;
    }
  }, [height]);

  return (
    <Container>
      {/* <TextHeader title="Barras" /> */}
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
