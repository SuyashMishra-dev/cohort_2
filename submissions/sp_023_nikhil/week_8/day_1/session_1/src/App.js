import React from 'react';
//import Test from './components/Test/Test'
import axios from 'axios';
import Github from './components/Github/Github'
import './App.css';

// const Weather = props => {
//   return (
//     <div>
//       <div>{props.name}</div>
//       <div>{props.main.temp} °C</div>
//       <div>
//         {props.weather.map(item => {
//           return (
//             <div>
//               <div>{item.main}</div>
//               <div>{item.description}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       status: false
//     };
//   }


//   componentDidMount() {
//     const requestParam = {
//       method: "get",
//       url: "https://fcc-weather-api.glitch.me/api/current",
//       params: {
//         lat: 17.3850,
//         lon: 78.4867
//       }
//     };
//     axios(requestParam)
//       .then(response => {
//         console.log(response);
//         this.setState({
//           data: response.data,
//           status: true
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div >
//         {this.state.status ? (
//           <Weather {...this.state.data} />
//         ) : (
//             <h1>Loading information</h1>
//         )}
//       </div>
//     );
//   }
// }
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: false
    };
  }

  componentDidMount() {
    const requestParam = {
      method: "get",
      url: "https://api.github.com/users?q"
    }
    
      axios(requestParam)
        .then(response => {
          this.setState({
            data: response.data,
            status: true
          })
        })
        .catch(err => console.log(err))
      };
      
      render() {
        //this.state.data.map(elm => {return console.log(elm.login)})
        return(
          <div>
        {this.state.status ? <Github info={this.state.data} /> :(<h1>Not working</h1>)} 
      </div>
    )
  }

}

export default App;
