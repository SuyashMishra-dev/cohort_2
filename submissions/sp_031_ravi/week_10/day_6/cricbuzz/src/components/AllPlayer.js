import React from 'react'


class AllPlayer extends React.Component{
    constructor(){
        super();
        let retrieveData = localStorage.getItem("Details");
        let details = JSON.parse(retrieveData)
        this.state = {
            element : details
    }
}
    render(){
       
        return(
            <div>
            {this.state.element.map(ele =>{
                console.log(ele.name)
                return(
                    <div key={Math.random()}>
                        <div>{ele.id}</div>
                        <div >{ele.name}</div>
                    </div>
                )
            })}
            </div>
        )
    }
    
}
export default AllPlayer;