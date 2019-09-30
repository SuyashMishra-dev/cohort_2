import React from 'react';
import generalStyles from '../general.module.css'
import {Link,NavLink} from 'react-router-dom'

class SubSideBar extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                
                
                <div style={{display:`${this.props.active?'inline':'none'}`,zIndex:"10",position:"relative",top:'-300px',left:'320px'}} className="list-group mt-5">
                    {
                        this.props.items.map(item=>{
                        return (
                        <Link

                        className={
                            `
                            list-group-item list-group-item-action  
                            ${generalStyles.bgcolor+' '
                            +generalStyles.textColor+' '
                            +generalStyles.borderGeneral+' '
                            +generalStyles.gFontSize}
                            `}
                        
                         to={'/collection/'+item.toLowerCase().split(' ').join('-')}
                         
                        >
                            {item}

                        </Link>
                        )
                        }   
                        )
                    }
                
                </div>
            </React.Fragment>
        )
    }
}

export default SubSideBar;

// ,zIndex:'50'
// to={{
//     pathname: "/courses/"+item.split(' ').join('-'),
                                
// }}

