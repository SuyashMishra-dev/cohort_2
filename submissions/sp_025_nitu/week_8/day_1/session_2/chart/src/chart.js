import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [
    {
      label: ' stock data',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,208,192,0.4)',
      borderColor: "blue",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'black',
      pointBackgroundColor: 'green',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(220,168,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 30,
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 49, 40,60, 59, 80, 81, 56, 55, 45,80, 81, 56, 55, 40,90,76]
    }
  ]
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>Stock example</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}