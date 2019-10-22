import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import '../App.css'

const data = {
    labels: ['1', '2', '3', '4', '5', '6','7','8','9','10','11', '12', '13', '14', '15', '16','17','18','19','20','21', '22', '23', '24', '25', '26','27','28','29','30'],
    datasets: [
    {
        label: "Stock Price",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgb(191, 255, 128)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.1,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(255, 51, 0)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "rgb(255, 51, 0)",
        pointHoverBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [25, 39, 40, 51, 76, 65, 50,41,33,35,51,57,78,99,76,45,23,56,46,36,96,85,78,43,46,76,96,85,78,43,]
    }
    ]
    };

export default class LineDemo extends Component {
  render() {
    return (
      <div className="container">
        <h2>Line Statistics</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
