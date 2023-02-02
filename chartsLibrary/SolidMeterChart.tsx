import { onMount } from "solid-js";
import { LineChart } from "@carbon/charts";
import { ChartConfig, MeterChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidMeterChart(props: ChartConfig<MeterChartOptions>) {
  onMount(() => {
    var newChartInstance = new LineChart(divRef, props);
  });

  return <div ref={divRef} />;
}
