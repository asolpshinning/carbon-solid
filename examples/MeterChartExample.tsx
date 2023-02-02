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
};

type Option = ChartConfig<MeterChartOptions>;

export default function MeterChartExample() {
  return (
    <div>
      <SolidMeterChart {...({ data, options } as Option)} />{" "}
      {/* issue posted on repo, I took a snapshot on this line and I put it in the issue */}
    </div>
  );
}
