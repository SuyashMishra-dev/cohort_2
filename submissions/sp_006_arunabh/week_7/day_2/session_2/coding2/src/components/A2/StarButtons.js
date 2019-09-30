import React from 'react';
import RestaurantItems from '../A1/RestaurantItems';
import RestaurantDetails from '../A1/RestaurantDetails';

class StarButtons extends React.Component{
    constructor(props){
        super(props);
        //console.log(props.list);
        this.state = {
            intial: RestaurantItems.map(card => <RestaurantDetails key = {card.id} menu = {card} />)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
       // console.log(this.state.intial)
        var rate = e.target.value;
        this.setState(
            {intial:RestaurantItems.filter(x => {
                if(x.rating > rate){
                    return x;
                }
                else
                    return null
            }).map(card => <RestaurantDetails key = {card.id} menu = {card} />)}
        );
    }
    render(){
        return(
            <div>
                <div style = {{display: "flex", gap: "20px"}}>
                    <button onClick = {e => this.handleClick(e, "value")} value = "4">****</button>
                    <button onClick = {e => this.handleClick(e, "value")} value = "3">***</button>
                    <button onClick = {e => this.handleClick(e, "value")} value = "2">**</button>
                    <button onClick = {e => this.handleClick(e, "value")} value = "1">*</button>
                </div>
                <div>
                    {this.state.intial}
                </div>
            </div>
        );
    }
}

export default StarButtons;