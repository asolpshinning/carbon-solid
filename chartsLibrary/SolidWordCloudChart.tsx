import { onMount } from "solid-js";
import { WordCloudChart } from "@carbon/charts";
import { ChartConfig, WorldCloudChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidWordCloudChart(
  props: ChartConfig<WorldCloudChartOptions>
) {
  onMount(() => {
    var newChartInstance = new WordCloudChart(divRef, props);
  });

  return <div ref={divRef} />;
}
