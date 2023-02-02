import { SolidAlluvialChart } from "../chartsLibrary";
import { ChartConfig, AlluvialChartOptions } from "@carbon/charts/interfaces";

const data = [
  {
    source: "About Modal",
    target: "Data and AI, AI Apps",
    value: 5,
  },
  {
    source: "About Modal",
    target: "Data and AI, Info Architecture",
    value: 4,
  },
  {
    source: "About Modal",
    target: "Public Cloud",
    value: 3,
  },
  {
    source: "About Modal",
    target: "Security",
    value: 4,
  },
  {
    source: "About Modal",
    target: "Automation",
    value: 8,
  },
  {
    source: "Cards",
    target: "Data and AI, AI Apps",
    value: 6,
  },
  {
    source: "Cards",
    target: "Data and AI, Info Architecture",
    value: 15,
  },
  {
    source: "Cards",
    target: "Public Cloud",
    value: 2,
  },
  {
    source: "Cards",
    target: "Security",
    value: 10,
  },
  {
    source: "Cards",
    target: "Automation",
    value: 13,
  },
  {
    source: "Create Flow",
    target: "Data and AI, AI Apps",
    value: 2,
  },
  {
    source: "Create Flow",
    target: "Data and AI, Info Architecture",
    value: 15,
  },
  {
    source: "Create Flow",
    target: "Public Cloud",
    value: 1,
  },
  {
    source: "Create Flow",
    target: "Security",
    value: 6,
  },
  {
    source: "Create Flow",
    target: "Automation",
    value: 15,
  },
  {
    source: "Notifications",
    target: "Data and AI, Info Architecture",
    value: 14,
  },
  {
    source: "Notifications",
    target: "Public Cloud",
    value: 3,
  },
  {
    source: "Notifications",
    target: "Security",
    value: 3,
  },
  {
    source: "Page Header",
    target: "Data and AI, AI Apps",
    value: 4,
  },
  {
    source: "Page Header",
    target: "Data and AI, Info Architecture",
    value: 8,
  },
  {
    source: "Page Header",
    target: "Automation",
    value: 13,
  },
];

const options = {
  title: "Alluvial (gradient)",
  alluvial: {
    nodes: [
      {
        name: "About Modal",
        category: "Pattern",
      },
      {
        name: "Cards",
        category: "Pattern",
      },
      {
        name: "Create Flow",
        category: "Pattern",
      },
      {
        name: "Page Header",
        category: "Pattern",
      },
      {
        name: "Notifications",
        category: "Pattern",
      },
      {
        name: "Data and AI, AI Apps",
        category: "Group",
      },
      {
        name: "Data and AI, Info Architecture",
        category: "Group",
      },
      {
        name: "Public Cloud",
        category: "Group",
      },
      {
        name: "Security",
        category: "Group",
      },
      {
        name: "Automation",
        category: "Group",
      },
    ],
  },
  height: "600px",
  color: {
    scale: {
      Cards: "#da1e28",
      "About Modal": "#b28600",
      "Create Flow": "#198038",
      "Page Header": "#ee538b",
      Notifications: "#08bdba",
      "Data and AI, AI Apps": "#1192e8",
      "Data and AI, Info Architecture": "#a56eff",
      Security: "#009d9a",
      Automation: "#fa4d56",
      "Public Cloud": "#198038",
    },
    gradient: {
      enabled: true,
    },
  },
};

type Option = ChartConfig<AlluvialChartOptions>;

export default function AlluvialChart() {
  return (
    <div>
      <SolidAlluvialChart {...({ data, options } as Option)} />
    </div>
  );
}
