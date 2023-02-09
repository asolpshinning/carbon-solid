import { SolidScatterChart } from "../chartsLibrary";
import { ChartConfig, ScatterChartOptions } from "@carbon/charts/interfaces";

const data = [
  {
    group: "Dataset 1",
    date: "2019-01-01T00:00:00.000Z",
    value: 50000,
    surplus: 738294464.1271627,
  },
  {
    group: "Dataset 1",
    date: "2019-01-05T00:00:00.000Z",
    value: 65000,
    surplus: 1618058686.1288714,
  },
  {
    group: "Dataset 1",
    date: "2019-01-08T00:00:00.000Z",
    value: null,
    surplus: 5301.61968864572,
  },
  {
    group: "Dataset 1",
    date: "2019-01-13T00:00:00.000Z",
    value: 49213,
    surplus: 4702085.506126033,
  },
  {
    group: "Dataset 1",
    date: "2019-01-17T00:00:00.000Z",
    value: 51213,
    surplus: 567636503.2704852,
  },
  {
    group: "Dataset 2",
    date: "2019-01-02T00:00:00.000Z",
    value: 0,
    surplus: 19485.8512614329,
  },
  {
    group: "Dataset 2",
    date: "2019-01-06T00:00:00.000Z",
    value: 57312,
    surplus: 186504755.872178,
  },
  {
    group: "Dataset 2",
    date: "2019-01-08T00:00:00.000Z",
    value: 27432,
    surplus: 133859212.78548077,
  },
  {
    group: "Dataset 2",
    date: "2019-01-15T00:00:00.000Z",
    value: 70323,
    surplus: 609408681.9160763,
  },
  {
    group: "Dataset 2",
    date: "2019-01-19T00:00:00.000Z",
    value: 21300,
    surplus: 138779842.43623143,
  },
  {
    group: "Dataset 3",
    date: "2019-01-01T00:00:00.000Z",
    value: 40000,
    surplus: 248882788.1101343,
  },
  {
    group: "Dataset 3",
    date: "2019-01-05T00:00:00.000Z",
    value: null,
    surplus: 23071.687124322027,
  },
  {
    group: "Dataset 3",
    date: "2019-01-08T00:00:00.000Z",
    value: 18000,
    surplus: 12162950.588797016,
  },
  {
    group: "Dataset 3",
    date: "2019-01-13T00:00:00.000Z",
    value: 39213,
    surplus: 386967114.3182977,
  },
  {
    group: "Dataset 3",
    date: "2019-01-17T00:00:00.000Z",
    value: 61213,
    surplus: 1300674806.4245932,
  },
  {
    group: "Dataset 4",
    date: "2019-01-02T00:00:00.000Z",
    value: 20000,
    surplus: 459257027.0723496,
  },
  {
    group: "Dataset 4",
    date: "2019-01-06T00:00:00.000Z",
    value: 37312,
    surplus: 887391936.1358188,
  },
  {
    group: "Dataset 4",
    date: "2019-01-08T00:00:00.000Z",
    value: 51432,
    surplus: 243450378.54233503,
  },
  {
    group: "Dataset 4",
    date: "2019-01-15T00:00:00.000Z",
    value: 25332,
    surplus: 3590158.150405745,
  },
  {
    group: "Dataset 4",
    date: "2019-01-19T00:00:00.000Z",
    value: null,
    surplus: 6939.9668614677,
  },
];

const options = {
  title: "Scatter (time series)",
  axes: {
    bottom: {
      title: "2019 Annual Sales Figures",
      scaleType: "time",
      mapsTo: "date",
    },
    left: {
      mapsTo: "value",
    },
  },
  height: "400px",
};

type Option = ChartConfig<ScatterChartOptions>;

export default function ScatterChart() {
  return (
    <div>
      <SolidScatterChart {...({ data, options } as Option)} />
    </div>
  );
}
