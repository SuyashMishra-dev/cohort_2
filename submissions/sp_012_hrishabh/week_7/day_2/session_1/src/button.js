import React from 'react';
import logo from './logo.svg';
import './App.css';
class Button extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         
         lableColor: [
            {
               "lable": "JOIN US",
               "color": "#2196CB",
            },
            {
               "lable": "LOGIN",
               "color": "#F79324"
            },
            {
               "lable": "SEARCH",
               "color": "#6BA13F",
            },
            {
               "lable": "HOME",
               "color": "#EE4E96",
            },
            {
               "lable": "SETTINGS",
               "color": "#7AA0B5",
            },
            {
               "lable": "CONTACT US",
               "color": "#A7252D",
            },
            {
               "lable": "HELP",
               "color": "#5C5895",
            },
            {
               "lable": "DOWNLOAD",
               "color": "#8C652C",
            },
         ]
             
          
      
      }}
    render() {
      return (
         <div style = {{"display": "grid", "gridTemplateColumns": "repeat(2, 150px)", "gridGap": "10px",}}>
            {
               this.state.lableColor.map((el) => {
                  return (
                     <div >
                        <button style = {{  "borderRadius": "20px",  "width": "150px", backgroundColor : el.color}} >{el.lable}</button>
                     </div>
                  );
               })
            }
         </div>
      )
    }
  }
  export default Button;  