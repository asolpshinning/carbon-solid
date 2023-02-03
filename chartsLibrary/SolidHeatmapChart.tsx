import { onMount } from "solid-js";
import { HeatmapChart } from "@carbon/charts";
import { ChartConfig, HeatmapChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLineChart(
  props: ChartConfig<HeatmapChartOptions>
) {
  onMount(() => {
    var newChartInstance = new HeatmapChart(divRef, props);
  });

  return <div ref={divRef} />;
}
