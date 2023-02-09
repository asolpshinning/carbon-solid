import { onMount } from "solid-js";
import { LineChart } from "@carbon/charts";
import { ChartConfig, LineChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidStepChart(props: ChartConfig<LineChartOptions>) {
  onMount(() => {
    var newChartInstance = new LineChart(divRef, props);
  });

  return <div ref={divRef} />;
}

/**
 * Stepped line charts plot data at regular intervals, forming a series of steps between data points.
 * You can use line visualizations to show trends over time and compare several data sets.
 **/
