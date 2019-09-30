import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [3,4,5,6,7,10,11,12,13,14 ,17,18,19,20,21,24,25,26,27,28],
  
  
  datasets: [
    {
      label: 'Stock Price - Day Wise',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(95,102,142,0.5)',
      borderColor: 'rgba(65,142,122,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.1,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 50,
      data: [150,164,174.10,170.50,170.50,167.90,171,166,167.40,164.05,180,159.60,159.60,153.00,154.90,159.30,188.40,180.40,192.00,200.65]
    }
  ]
};

export default class June extends Component {
  render() {
    return (
      <div>
        <h2>Stock Price Day Wise for June 2019</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}