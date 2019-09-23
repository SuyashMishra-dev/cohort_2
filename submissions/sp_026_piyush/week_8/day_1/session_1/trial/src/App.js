// import React from 'react';
// import './App.css';

// // const User = (props) => <div>School: {this.props.name}</div>; // WRONG. Don't use this.props
// const User = (props) => <div>School: {props.name}</div>;


// class User2 extends React.Component {
//   render(){ 
//     return (
//       <h1>Student: {this.props.name}</h1>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <User name={'Masai'}/>
//       <User2 name={'Piyush'}/>
//       <User2 name={'Suraj'}/>
//       <User2 name={'Tanveer'}/>
//       <User2 name={'Arunabh'}/>
//     </div>
//   );
// }

// export default App;
// ##############################################


// ##############################################
// GitHub Profile Card 
// import React, {Component} from 'react';
// import './App.css';

// const App = () => {
//   return( 
//     <div className="centered">
//       <img className="img" src={'https://avatars0.githubusercontent.com/u/20015769?s=460&v=4'} alt="User's portrait"/>
//       <div className="name">Piyush Yadav</div>
//       <div className="userName">piyush-git</div>
//       <button className="btn rounded">Follow</button>
//       <div>Bangalore, India</div>
//     </div>
//   );
// }

// export default App;

// ##############################################


// ##############################################
// GitHub Profile Card but into a separate component
// import React, {Component} from 'react';
// import './App.css';
// import Profile from './components/profile/Profile';

// const App = () => {
//   return( 
//     <div className="flex">
//       Hey empty app
//       <Profile src="https://avatars0.githubusercontent.com/u/20015769?s=460&v=4" 
//           name="Piyush Yadav" 
//           userName="piyush-git" 
//           location="Bangalore, India" />

//       <Profile src="https://avatars2.githubusercontent.com/u/31788669?s=460&v=4"
//           name="Sachin CV"
//           userName="sachinkapalidigi"
//           location="Bangalore, India" />

//       <Profile src="https://avatars3.githubusercontent.com/u/51873417?s=460&v=4"
//           name="Anuj Choudhary" 
//           userName="choudharyanuj" 
//           location="Bangalore, India" />
//     </div>
//   );
// }

// export default App;

// ##############################################

// ##############################################
// Call a fucntion from a parent to child
// import React, {Component} from 'react';
// import './App.css';
// import Profile from './components/profile/Profile';

// // const follow = () => {
// //   console.log("Follow Profile")
// // }
// const follow = (name = "default") => {
//   console.log("Follow Profile " + name)
// }

// const App = () => {
//   return( 
//     <div className="flex">
//       Hey empty app
//       <Profile src="https://avatars0.githubusercontent.com/u/20015769?s=460&v=4" 
//           name="Piyush Yadav" 
//           userName="piyush-git" 
//           location="Bangalore, India"
//           follow={(a) => follow(a)}/>

//       <Profile src="https://avatars2.githubusercontent.com/u/31788669?s=460&v=4"
//           name="Sachin CV"
//           userName="sachinkapalidigi"
//           location="Bangalore, India" />

//       <Profile src="https://avatars3.githubusercontent.com/u/51873417?s=460&v=4"
//           name="Anuj Choudhary" 
//           userName="choudharyanuj" 
//           location="Bangalore, India" />
//     </div>
//   );
// }

// export default App;

// ##############################################

// ##############################################
// How to Maintain a STATE
// eslint-disable-next-line
// import React, {Component} from 'react';
// import './App.css';
// import Profile from './components/profile/Profile';

// const follow = (name = "default", count) => {
//   console.log("Followed " + name, " Total Followers " + count)
// }

// const App = () => {
//   return( 
//     <div className="flex">
//       Hey empty app
//       <Profile 
//           src = "https://avatars0.githubusercontent.com/u/20015769?s=460&v=4" 
//           name = "Piyush Yadav" 
//           userName = "piyush-git" 
//           location = "Bangalore, India"
//           follow = {(a, b) => follow(a, b)} 
//           count = {100} />

//       <Profile 
//           src = "https://avatars2.githubusercontent.com/u/31788669?s=460&v=4"
//           name = "Sachin CV"
//           userName = "sachinkapalidigi"
//           location = "Bangalore, India"
//           follow = {(a, b) => follow(a, b)} 
//           count = {50} />

//       <Profile 
//           src = "https://avatars3.githubusercontent.com/u/51873417?s=460&v=4"
//           name = "Anuj Choudhary" 
//           userName = "choudharyanuj" 
//           location = "Bangalore, India"
//           follow = {(a, b) => follow(a, b)} 
//           count = {200} />
//     </div>
//   );
// }

// export default App;

// ##############################################


// ##############################################
// Made some changes. Changed App from functional to class based component
// Did that in order to change the count from the child to the parent or something 
import React, {Component} from 'react';
import './App.css';
import Profile from './components/profile/Profile';

const follow = (name = "default", count) => {
  console.log("Followed " + name, " Total Followers " + count)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: 100,
      val2: 50,
      val3: 200
    }
  }
  render() {
    return( 
      <div className="flex">
        Hey empty app
        <Profile 
            src = "https://avatars0.githubusercontent.com/u/20015769?s=460&v=4" 
            name = "Piyush Yadav" 
            userName = "piyush-git" 
            location = "Bangalore, India"
            follow = {(a, b) => follow(a, b)} 
            count = {100} />

        <Profile 
            src = "https://avatars2.githubusercontent.com/u/31788669?s=460&v=4"
            name = "Sachin CV"
            userName = "sachinkapalidigi"
            location = "Bangalore, India"
            follow = {(a, b) => follow(a, b)} 
            count = {50} />

        <Profile 
            src = "https://avatars3.githubusercontent.com/u/51873417?s=460&v=4"
            name = "Anuj Choudhary" 
            userName = "choudharyanuj" 
            location = "Bangalore, India"
            follow = {(a, b) => follow(a, b)} 
            count = {this.state.val3} />
        <button onClick = {() => this.setState({val3: this.state.val3 + 1})}>Increase Val3: {this.state.val3}</button>
      </div>
    );
  }
}

export default App;