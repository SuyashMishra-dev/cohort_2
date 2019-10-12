import React from "react";
import Styles from "./Styles.css"

export default class Home extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data:[],
    //         name:"",

    //     }
    // }
    render(){
        return(
            <div>
                {/* <React.Fragment> */}
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="second.jpg" className ="main" alt="..."/>
                        </div>
                        <div className="carousel-item">
                           <img src="first.jpg" className="main" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="third.jpg" className="main" alt="..."/>
                        </div>
                    </div>
                  </div>
                {/* </React.Fragment> */}
            </div>
        )
    }
}