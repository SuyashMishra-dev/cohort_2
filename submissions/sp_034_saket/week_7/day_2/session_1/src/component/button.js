import React ,{Component}from 'react';

class Button extends Component{
    constructor(props){
      super(props)

      this.state = {
        os : <ul>
               
            </ul>,
        }
    }
    render(){
      return (
        <div>
          <button>JOIN US</button>
          <button>SETTINGS</button><br/>
          <button>LOGIN</button>
          <button>CONTACT US</button><br/>
          <button>SEARCH</button>
          <button>HELP</button><br/>
          <button>HOME</button>
          <button>DOWNLOAD</button>
        </div>
      );
    }
}

export default Button;
