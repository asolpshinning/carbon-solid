import { onMount } from "solid-js";
import { RadarChart } from "@carbon/charts";
import { ChartConfig, RadarChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidRadarChart(props: ChartConfig<RadarChartOptions>) {
  onMount(() => {
    var newChartInstance = new RadarChart(divRef, props);
  });

  return <div ref={divRef} />;
}
