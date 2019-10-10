import React from "react";
import {Line} from "react-chartjs-2";

const data = {
    labels: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30],
    datasets: [
        {
            label: "Stock Prices",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "orange",
            borderColor: "black",
            pointBorderColor: "green",
            pointBackgroundColor: "blue",
            pointBorderWidth: 15,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "teal",
            pointHoverBorderColor: "gray",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [98, 55, 63, 78, 60, 25, 87, 25, 39, 85, 100, 89, 27, 13, 78, 99, 88, 35, 96, 85, 36, 52, 55, 82, 99, 21, 10, 88, 63, 81]
        }
    ]
};

class Chart extends React.Component
{
    render()
    {
        return(
            <div style={{width: 1200, marginLeft: 150}}>
                <h1>Stock Prices</h1>
                <Line ref="chart" data = {data} />
            </div>
        );
    }
    componentDidMount()
    {
        const {datasets} = this.refs.chart.chartInstance.data;
    }
}

export default Chart;