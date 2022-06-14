import { useMemo } from "react";

interface IDimePros {
  larger: string;
}

const Dimensions = ({ larger }: IDimePros) => {
  const widthWindows = useMemo(() => {
    let widValue = null;

    if (larger.length >= 768) {
      widValue = 570;

      return widValue;
    } else {
      widValue = 200;

      return widValue;
    }
  }, [larger]);
  return widthWindows;
};

export default Dimensions;
