import { SolidLollipopChart } from "../chartsLibrary";
import { ChartConfig, LollipopChartOptions } from "@carbon/charts/interfaces";

const data = [
  {
    group: "Dataset 1",
    key: "Qty",
    value: 34200,
  },
  {
    group: "Dataset 2",
    key: "More",
    value: 34200,
  },
  {
    group: "Dataset 3",
    key: "Sold",
    value: 41200,
  },
  {
    group: "Dataset 4",
    key: "Restocking",
    value: 22000,
  },
];

const options = {
  title: "Lollipop (horizontal) - presentation",
  axes: {
    left: {
      title: "2019 Annual Sales Figures",
      scaleType: "labels",
      mapsTo: "key",
    },
    bottom: {
      mapsTo: "value",
    },
  },
  points: {
    radius: 7,
  },
  height: "400px",
};

type Option = ChartConfig<LollipopChartOptions>;

export default function LineChart() {
  return (
    <div>
      <SolidLollipopChart {...({ data, options } as Option)} />
    </div>
  );
}
