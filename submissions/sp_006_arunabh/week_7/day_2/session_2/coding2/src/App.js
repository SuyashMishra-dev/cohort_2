import React from 'react';
import RestaurantDetails from './components/A1/RestaurantDetails';
import RestaurantItems from './components/A1/RestaurantItems';
import FourStar from './components/A2/FourStar';

const items = RestaurantItems.map(item => <RestaurantDetails key={item.id} menu={item}/>)

function App() {
  return (
    <div style = {{marginLeft: "25%"}}>
      {items}

      <FourStar />
    </div>
  );
}

export default App;
