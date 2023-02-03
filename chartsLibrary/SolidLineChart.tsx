import { onMount } from "solid-js";
import { LineChart } from "@carbon/charts";
import { ChartConfig, LineChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = (<div></div>) as HTMLDivElement;

export default function SolidLineChart(props: ChartConfig<LineChartOptions>) {
  onMount(() => {
    var newChartInstance = new LineChart(divRef, props);
  });

  return <div ref={divRef} />;
}

/*


Tree maps can work for visualizing a part-to-whole relationship among a large number of categories—as long as the data
is hierarchical and exact comparisons between the categories is not a primary concern.

When dealing with large amounts of data in a constrained space, tree structured nodelink diagrams (like the network
diagram that's the Tree Chart), grow too complex to be useful. Tree maps provide an attractive alternative by
maintaining a hierarchical structure while displaying rectangular quantities for each category
and subcategory via area size.


*/
