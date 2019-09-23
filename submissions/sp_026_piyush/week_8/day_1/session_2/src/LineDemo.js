import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

var stockPriceFirst = [];
var stockPriceSecond = [];
var labelsArr = [];
for (var i = 0; i < 30; i++) {
  stockPriceFirst.push(Math.floor(Math.random() * 100));
  stockPriceSecond.push(Math.floor(Math.random() * 100));
  labelsArr.push(i+1);
}
// console.log(stockPrice)

const data = {
  // labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  labels: labelsArr,
  datasets: [
    {
      label: 'June Stats',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // data: [65, 59, 80, 81, 56, 55, 40, 51, 33, 55, 10, 25, 51, 22, 23, 32, 65, 59, 80, 81, 56, 55, 40, 51, 33, 55, 10, 25, 51, 23]
      data: stockPriceFirst
    },
    {
      label: 'July Stats',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(148,25,25,0.4)',
      borderColor: 'rgba(148,25,25,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // data: [65, 59, 80, 81, 56, 55, 40, 51, 33, 55, 10, 25, 51, 22, 23, 32, 65, 59, 80, 81, 56, 55, 40, 51, 33, 55, 10, 25, 51, 23]
      data: stockPriceSecond
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Stock Prices</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
    console.log(datasets[1].data);
  }
}