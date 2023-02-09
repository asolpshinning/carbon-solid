import { onMount } from "solid-js";
import "@carbon/charts/styles.css";
import { CirclePackChart } from "@carbon/charts";
import { ChartConfig, CirclePackChartOptions } from "@carbon/charts/interfaces";

var divRef: HTMLDivElement = (<div />) as HTMLDivElement;

export default function SolidHistogram(
  props: ChartConfig<CirclePackChartOptions>
) {
  onMount(() => {
    let newChartInstance = new CirclePackChart(divRef, props);
  });
  return <div ref={divRef} />;
}
