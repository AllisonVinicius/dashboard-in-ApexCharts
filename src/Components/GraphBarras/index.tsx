import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { options, series } from "../../repositories/barras";
import TextHeader from "../TextHeader";
import { Container } from "./styles";

const GraphBarras = () => {
  const { innerWidth: width } = window;

  const widthWindows = useMemo(() => {
    let widValu = null;

    if (width > 768) {
      widValu = 600;
      return widValu;
    } else {
      widValu = 300;
      return widValu;
    }
  }, [width]);

  console.log("laregura", widthWindows);

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
