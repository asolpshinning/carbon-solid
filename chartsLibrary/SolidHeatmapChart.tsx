import { onMount } from "solid-js";
import { HeatmapChart } from "@carbon/charts";
import { ChartConfig, HeatmapChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLineChart(
  props: ChartConfig<HeatmapChartOptions>
) {
  onMount(() => {
    var newChartInstance = new HeatmapChart(divRef, props);
  });

  return <div ref={divRef} />;
}

/*


* A heat map is a two-dimensional visualization in which individual values contained in a matrix are represented as colors. This technique makes it easy to visualize complex data at a glance. When it comes to heat maps, the most common color ranges are expressed in either sequential and diverging color scales according to the type of data represented.

* Sequential scales:
* Sequential scales use a blended progression, typically of a single color, from the lowest contrast to the highest contrast values, representing lows to highs. It’s best practice to use a sequential scale with values that are all positive or all negative. Sequential heat maps can leverage the full range of the palette (from 10–100) to maximize contrast. Please note that the 3:1 minimum contrast requirement does not apply to heat maps.


*/
