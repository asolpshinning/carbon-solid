import { ChartConfig, MeterChartOptions } from "@carbon/charts/interfaces";
import { SolidMeterChart } from "../chartsLibrary";

const data = [
  {
    group: "Dataset 1",
    value: 56,
  },
];

const options = {
  title: "Meter Chart - with statuses",
  meter: {
    peak: 80,
    status: {
      ranges: [
        {
          range: [0, 50],
          status: "success",
        },
        {
          range: [50, 60],
          status: "warning",
        },
        {
          range: [60, 100],
          status: "danger",
        },
      ],
    },
  },
  height: "100px",
} as MeterChartOptions;

type Option = MeterChartOptions;

export default function MeterChartExample() {
  return (
    <div>
      <SolidMeterChart {...{ data, options: options }} />
    </div>
  );
}
