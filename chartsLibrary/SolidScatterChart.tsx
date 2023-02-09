import { onMount } from "solid-js";
import { ScatterChart } from "@carbon/charts";
import { ChartConfig, ScatterChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidScatterChart(
  props: ChartConfig<ScatterChartOptions>
) {
  onMount(() => {
    var newChartInstance = new ScatterChart(divRef, props);
  });

  return <div ref={divRef} />;
}

/**
 * Scatter plot visualizations use data points to plot two measures anywhere along a scale,
 * not only at regular tick marks.
 * You can use scatter plots to explore correlations between different measures.
 **/
