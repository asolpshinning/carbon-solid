import { onMount } from "solid-js";
import { AreaChart } from "@carbon/charts";
import { ChartConfig, AreaChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidSparkline(props: ChartConfig<AreaChartOptions>) {
  onMount(() => {
    var newChartInstance = new AreaChart(divRef, props);
  });

  return <div ref={divRef} />;
}
