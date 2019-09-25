import React from 'react';
// import RestaurantItems from '../A1/RestaurantItems';
// import RestaurantDetails from '../A1/RestaurantDetails';

class FourStar extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
            
    //     }
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleClick() {
        // return RestaurantItems.map(items => <RestaurantDetails key={items.id} menu={items} />)
        "I am Here"
    }
    render(){
        return(
            <button onClick = {this.handleClick}>Four Star</button>
        );
    }
}

export default FourStar;