import { onMount } from "solid-js";
import { LineChart } from "@carbon/charts";
import { ChartConfig, LineChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLineChart(props: ChartConfig<LineChartOptions>) {
  onMount(() => {
    var newChartInstance = new LineChart(divRef, props);
  });

  return <div ref={divRef} />;
}
