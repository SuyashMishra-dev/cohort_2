import React from 'react';
import { Line } from 'react-chartjs-2';

let info = [
    {data: 79},
    {data: 17},
    {data: 53},
    {data: 48},
    {data: 24},
    {data: 58},
]

const data = {
    labels: ['5th', '10th', '15th', '20th', '25th', '30th'],
    datasets: [
        {
            label: 'June Stock Data',
            lineTesnion: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192,192,0.8)',
            borderCapStyle: 'butt',
            borederDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pontHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            poiintHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: info.map(elm=>(elm.data))
        }
    ]
};

class Chart extends React.Component {
    render() {
        return (
            <div>
                <h1>June Stock Prices</h1>
                <Line ref="chart" data={data} />
            </div>
        )
    }
    // componentDidMount() {
    //     const { datasets } = this.refs.chart.chartInstance.data
    //     console.log(datasets[0].data)
    // }
}

export default Chart;