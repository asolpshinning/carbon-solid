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

/**
 * Alluvial, or Sankey diagrams, are a type flow diagram designed to show two indicators of a dataset
 * and how records distribute among them, highlighting correlations. Multiple blocks of two indicators can be placed next
 * to each other creating a wider alluvial diagram but it’s crucial to consider that this specific kind of chart does not
 * show correlations between indicators that are not directly connected. This is usually emphasized using a different set
 * of colors for each block.
 **/
