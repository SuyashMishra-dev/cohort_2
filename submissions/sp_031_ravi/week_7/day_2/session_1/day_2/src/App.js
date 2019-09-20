import React from 'react';
import './App.css';
import MobileData from './components/Data.js'
import Buttons from './components/Button.js'
import Facebook from './components/Facebook.js'
class Profile extends React.Component{
  constructor(props){
    super(props)
    
    this.Data = {
      os : ["Android","Blackberry","iPhone","Windows Phone"],
      manufacturer : ["Samsung", "HTC", "Micromax","Apple"],
    page : {
      names:"Ricky Park",
      country:"NEW York",
      proffession:"User interface designer and frond-end developer",
      skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node"]
    }
  }
}

  render(){
    return (  
      <div>
        <h1>Mobile Operating System</h1>
        <MobileData list={this.Data.os}/>

        <h1>Mobile Manufactorers</h1>
        <MobileData  list={this.Data.manufacturer}/>
        
        <div>
          <Buttons color="#61dafb" label="JOIN US"/>
          <Buttons color="#90c7d6" label="SETTINGS"/>
        </div>
        <div>
          <Buttons color="#ebab21" label="LOGIN"/>
          <Buttons color="#b31f1f" label="CONTACT US"/>
        </div>
        <div>
          <Buttons color="#3c6b1c" label="SEARCH"/>
          <Buttons color="#302b75" label="HELP"/>
        </div>
        <div>
          <Buttons color="#cc3dad" label="HOME"/>
          <Buttons color="#241f6e" label="DOWNLOAD"/>
        </div>
        <div>
          <Facebook />
        </div>
          {/* <Buttons color={this.Data.color} label={this.Data.label}/> */}
        
         </div>
        // <ul>
        //   <li>{this .Data.os[0]}</li>
        //   <li>{this.Data.os[1]}</li>
        //   <li>{this.Data.os[2]}</li>
        //   <li>{this.Data.os[3]}</li>
        // </ul>
        
        // <h1>Mobile Manufactorers</h1>
        // <ul>
        //   <li>{this.Data.manufacturer[0]}</li>
        //   <li>{this.Data.manufacturer[1]}</li>
        //   <li>{this.Data.manufacturer[2]}</li>
        //   <li>{this.Data.manufacturer[3]}</li>
        // </ul>
     
    );
  }
}

// const Parent = React.createClass({
//   getInitialState: function() {
//     return {datas: Datas}
//   },
//   render: function() {
//     const datas = this.state.datas.map((data, i) => {
//       return (
//         <Child
//           key={i}
//           label={data.label}
//           color={data.color}
//         />
//       );
//     });
//    return (
//     <div>
//        {datas}
       
//     </div>
//    );
//   }
// });


export default Profile;
