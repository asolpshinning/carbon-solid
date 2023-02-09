import { SolidGaugeChart } from "../chartsLibrary";

const data = [
    {
        "group": "value",
        "value": 42
    },
    {
        "group": "delta",
        "value": -13.37
    }
];
const options = {
    "title": "Gauge semicircular -- danger status",
    "resizable": true,
    "height": "250px",
    "width": "100%",
    "gauge": {
        "type": "semi",
        "status": "danger"
    }
};

export default function GaugeChartExample() {
    return (
        <div>
            <SolidGaugeChart {...{ data, options }} />
        </div>
    );
}