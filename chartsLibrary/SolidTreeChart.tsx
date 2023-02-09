import { onMount } from "solid-js";
import { TreeChart } from "@carbon/charts";
import { ChartConfig, TreeChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLineChart(props: ChartConfig<TreeChartOptions>) {
  onMount(() => {
    var newChartInstance = new TreeChart(divRef, props);
  });

  return <div ref={divRef} />;
}
