import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "June Dataset",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "#ffcc00",
            borderColor: "#003300",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffSet: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#ff9900",
            pointBackgroundColor: "fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 55, 56, 81, 80, 59, 65, 48, 75, 86, 75, 48, 65, 59, 80, 81, 56, 55, 40, 55, 56, 81, 80, 59, 65,48, 75, 86, 75, 86]
        }
    ]
};

export default class JuneData extends React.Component {
    render() {
        return (
            <div>
                <h2>June Month Stats</h2>
                <Line ref="chart" data = {data} />
            </div>
        );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data;
        console.log(datasets[0].data);
    }
}
