import "@carbon/charts/styles.css";
import { onMount } from "solid-js";
import { LollipopChart } from "@carbon/charts";
import { ChartConfig, PieChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLollipopChart(
  props: ChartConfig<PieChartOptions>
) {
  onMount(() => {
    let newChartInstance = new LollipopChart(divRef, props);
  });

  return <div ref={divRef} />;
}
