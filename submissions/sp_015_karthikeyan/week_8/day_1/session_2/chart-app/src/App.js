import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import {Bar} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
import {Scatter} from 'react-chartjs-2';


let labelsArr = [];
for(let i = 1; i <= 30; i++) {
    labelsArr.push(i);
}

let dataArr = [];
for(let i = 0; i < 31; i++) {
    dataArr.push(Math.floor(Math.random()*100))
}

let max = Math.max(...dataArr);
let min = Math.min(...dataArr);

const data = {
    labels: labelsArr,
    datasets: [
        {
            label: 'Stock Chart',
            borderColor: 'rgb(75, 192, 192)',
            data: dataArr
        }
    ]
}

let scatterArr = [];
for(let i = 0; i < 31; i++) {
  scatterArr.push({x: Math.floor(Math.random()*100), y:Math.floor(Math.random()*100)})
}

const scatterdata = {
    datasets: [
        {
          label: 'My First dataset',
          fill: true,
          data: scatterArr
        }
    ]
}

export default class App extends Component {

  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-lg-8">
            <Line ref="chart" data={data} />
            <Bar ref="chart" data={data} />
            <HorizontalBar ref="chart" data={data} />
            <Scatter ref="chart" data={scatterdata} />
          </div>
          <table className = "table col-lg-1 offset-lg-1 text-center">
            <thead>
              <tr>
                <th>Max</th>
                <th>Min</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{max}</td>
                <td>{min}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets);
  }
}
