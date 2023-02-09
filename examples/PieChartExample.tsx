import DonutChart from "../chartsLibrary/SolidDonutChart";
import SolidPieChart from "../chartsLibrary/SolidPieChart";

const data = [
  {
    group: "2V2N 9KYPM version 1",
    value: 20000,
  },
  {
    group: "L22I P66EP L22I P66EP L22I P66EP",
    value: 65000,
  },
  {
    group: "JQAI 2M4L1",
    value: 75000,
  },
  {
    group: "J9DZ F37AP",
    value: 1200,
  },
  {
    group: "YEL48 Q6XK YEL48",
    value: 10000,
  },
  {
    group: "Misc",
    value: 25000,
  },
];
const options = {
  title: "Pie Chart",
  resizable: true,
  donut: {
    center: {
      label: "Browsers",
    },
  },
  height: "400px",
};

export default function PieChartExample() {
  return (
    <div>
      <SolidPieChart {...{ data, options }} />
    </div>
  );
}
