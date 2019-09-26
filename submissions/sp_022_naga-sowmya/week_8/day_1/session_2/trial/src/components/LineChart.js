import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const initialstate = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
  datasets: [
    {
      label: 'June',
      fill: false,
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
      data: [14, 25, 32, 45, 56, 84, 50, 40, 30, 32, 45, 27, 69, 54, 20, 10, 2, 45, 78 ,96, 87, 62, 35, 28, 10,26, 85, 11, 20, 30 ]
    }
  ]
};

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <h1>Stock Prices</h1>
          <Line ref="chart" data={initialstate} />
        <h4>days</h4>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}