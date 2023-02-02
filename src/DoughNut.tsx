import "@carbon/charts/styles.css";
import { onMount } from "solid-js"
import { DonutChart } from "@carbon/charts";
import { PieChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = <div></div> as HTMLDivElement;

export default function DoughNut() {

    onMount(() => {
        let newChartInstance = new DonutChart(divRef, {
            data: [
                {
                    "group": "2V2N 9KYPM version 1",
                    "value": 20000
                },
                {
                    "group": "L22I P66EP L22I P66EP L22I P66EP",
                    "value": 65000
                },
                {
                    "group": "JQAI 2M4L1",
                    "value": 75000
                },
                {
                    "group": "J9DZ F37AP",
                    "value": 1200
                },
                {
                    "group": "YEL48 Q6XK YEL48",
                    "value": 10000
                },
                {
                    "group": "Misc",
                    "value": 25000
                }
            ],
            options: {
                "title": "Donut",
                "resizable": true,
                "donut": {
                    "center": {
                        "label": "Browsers"
                    }
                },
                "height": "400px"
            } as PieChartOptions
        });
        console.log(divRef); // <div> element
    });

    return <div ref={divRef} />;
}