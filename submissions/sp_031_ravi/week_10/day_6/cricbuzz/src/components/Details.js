import React from 'react'

class Detail extends React.Component{
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
        <div>hii</div>
    )
}
}

export default Detail;