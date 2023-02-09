import { SolidRadarChart } from "../chartsLibrary";
import { ChartConfig, RadarChartOptions } from "@carbon/charts/interfaces";

const data = [
  {
    product: "Product 1",
    feature: "Price",
    score: 60,
  },
  {
    product: "Product 1",
    feature: "Usability",
    score: 92,
  },
  {
    product: "Product 1",
    feature: "Availability",
    score: 5,
  },
  {
    product: "Product 1",
    feature: "Performance",
    score: 85,
  },
  {
    product: "Product 1",
    feature: "Quality",
    score: 60,
  },
  {
    product: "Product 2",
    feature: "Price",
    score: 70,
  },
  {
    product: "Product 2",
    feature: "Usability",
    score: 63,
  },
  {
    product: "Product 2",
    feature: "Availability",
    score: 78,
  },
  {
    product: "Product 2",
    feature: "Performance",
    score: 50,
  },
  {
    product: "Product 2",
    feature: "Quality",
    score: 30,
  },
];

const options = {
  title: "Radar",
  radar: {
    axes: {
      angle: "feature",
      value: "score",
    },
  },
  data: {
    groupMapsTo: "product",
  },
  height: "400px",
};

type Option = ChartConfig<RadarChartOptions>;

export default function RadarChart() {
  return (
    <div>
      <SolidRadarChart {...({ data, options } as Option)} />
    </div>
  );
}
