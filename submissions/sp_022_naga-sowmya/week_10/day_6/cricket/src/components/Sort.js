import React from 'react'

var data = JSON.parse(localStorage.getItem('players'))

class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr : []
        }
    }
    render() {
        console.log(data.sort())
        console.log("yov")
        return (
            <div className="container text-center">
                <h1>Sorted by t20 score</h1>
                <p>{data.map(val=>{
                    return(
                        <div>
                            <p>{val.t20}</p>
                        </div>
                    )
                })}</p>
            </div>
        )
    }
}

export default Sort;