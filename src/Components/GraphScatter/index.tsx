import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../../repositories/scatter";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphScatter = () => {
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
      <TextHeader title="Scatter" />

      <ReactApexChart
        options={options}
        series={options.series}
        type="scatter"
        width={widthWindows}
        height={heightWindows}
      />
    </Container>
  );
};

export default GraphScatter;
