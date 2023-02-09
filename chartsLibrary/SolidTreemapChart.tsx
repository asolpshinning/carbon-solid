import { onMount } from "solid-js";
import { TreemapChart } from "@carbon/charts";
import { ChartConfig, TreemapChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidTreemapChart(
  props: ChartConfig<TreemapChartOptions>
) {
  onMount(() => {
    var newChartInstance = new TreemapChart(divRef, props);
  });

  return <div ref={divRef} />;
}
