import React ,{Component}from 'react';

class Mobile extends Component{
    constructor(props){
      super(props)
      
      this.state = {
        os : <ul>
                <li>Android</li>
                <li>Blackberry</li>
                <li>iPhone</li>
                <li>Windiws Phone</li>
            </ul>,
        manufacture :<ul>
                        <li>Samsung</li>
                        <li>HTC</li>
                        <li>Micromax</li>
                        <li>Apple</li>
                    </ul>
        }
    }
    render(){
      return (
        <div>
          <h1>Mobile Operating System</h1>
          <p>{this.state.os}</p>
          
          <h1>Mobile Manufactures</h1>
          <p>{this.state.manufacture}</p>
        </div>
      );
    }
  }

export default Mobile;
