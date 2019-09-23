import React from 'react';

import {Line} from 'react-chartjs-2'

class DisplayChart extends React.Component {
    constructor(){
        super();
        this.state = {
            data : {                    
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                    datasets: [
                        {
                            label: 'My First dataset',
                            fill: false,
                            lineTension: 0.2,
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
                            data: []
                        }
                    ]
                },
            idLoaded : false,
            inputValue : null,
            inputIndex : 0,
            toggle : false
        }
        
    }

    componentDidMount(){
        let newData = this.state.data.labels.map(el=>Math.floor(Math.random()*100))

        let newDataSets = this.state.data.datasets;
        newDataSets[0] = {...newDataSets[0],data:[...newData]}

        this.setState({
            data: {...this.state.data,...newDataSets},
            isLoaded : true
        })
    }

    inputChangeHandler = (e) => {
        let val = null
        if(e.target.value == Number(e.target.value)){
            val = Number(e.target.value)
        } else {
            return false;
        }
        this.setState({
            inputValue : val
        })
    }

    selectChangeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            inputIndex : e.target.value
        })
    }

    setValue = () => {
        let newDataSets = this.state.data.datasets;
        let newData = newDataSets[0].data;
        // console.log(newData,this.state.inputIndex,this.state.inputValue)
        newData[this.state.inputIndex] = this.state.inputValue;
        // console.log(newData)
        newDataSets[0] = {...newDataSets[0],data:[...newData]}

        this.setState({
            data: {...this.state.data,...newDataSets},
            toggle: !this.state.toggle            
        })
    }

    render() {
        // console.log(this.state.data.datasets[0].data)
        let el = null;
        this.state.isLoaded?el = <select onChange={(e)=>{this.selectChangeHandler(e)}}>{this.state.data.labels.map((val,i)=><option key={i+'_'+val} value={i}>{val}</option>)}</select>: el = ''
        return (
            <div>
                <h1>Stock for Last 30 days</h1>
                {this.state.isLoaded?<Line data={this.state.data} />:''}
                {this.state.isLoaded?<h3>Max : {Math.max(...this.state.data.datasets[0].data)} Min : {Math.min(...this.state.data.datasets[0].data)}</h3>:''}
                <div className="row">
                    {el}
                    <input className="form-control" onChange={(e)=>{this.inputChangeHandler(e)}} value={this.state.inputValue} />
                    <button className="btn btn-success" onClick={this.setValue}>Set Value</button>
                </div>
            </div>
        )
    }
}

export default DisplayChart;


// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };
  
//   export default class LineDemo extends React.Component {
//     render() {
//       return (
//         <div>
//           <h2>Line Example</h2>
//           <Line ref="chart" data={data} />
//         </div>
//       );
//     }
  
//     componentDidMount() {
//       const { datasets } = this.refs.chart.chartInstance.data
//       console.log(datasets[0].data);
//     }
//   }