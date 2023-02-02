import { onMount } from "solid-js";
import { AlluvialChart } from "@carbon/charts";
import { ChartConfig, AlluvialChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidAlluvialChart(
  props: ChartConfig<AlluvialChartOptions>
) {
  onMount(() => {
    var newChartInstance = new AlluvialChart(divRef, props);
  });

  return <div ref={divRef} />;
}
