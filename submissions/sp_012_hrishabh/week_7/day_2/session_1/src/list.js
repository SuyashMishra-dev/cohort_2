import React from 'react';
import logo from './logo.svg';
import './App.css';
class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           
            ListData: [ {
                "item": "Android",
                "item2": "Samsung"
            },
            {
                "item": "Blackberry",
                "item2": "HTC",
            },
            {
                "item": "iPhone",
                "item2": "Micromax"
            },
            {
                "item": "Windows Phone",
                "item2": "Apple",
            }
        ]
               
            
        
        }}
    render() {
      return (
         <div>
            <h1>Mobile Operating System</h1>
            <ul>
                {
                    this.state.ListData.map((item) => {
                        return (
                            <li>{item.item}</li>
                        )
                    })
                }
              
            </ul>

            <h1>Mobile Manufactures</h1>
            <ul>
                {
                    this.state.ListData.map((item) => {
                        return (
                            <li>{item.item2}</li>
                        )
                    })
                }
              
              
            </ul>
         </div>
      )
    }
  }
  export default List;