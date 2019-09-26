import React from 'react';
import StarButtons from './components/A2/StarButtons';

// const items = RestaurantItems.map(item => <RestaurantDetails key={item.id} menu={item}/>)

function App() {
  return (
    <div style = {{marginLeft: "25%"}}>
      <StarButtons />
      {/* {items} */}
    </div>
  );
}

export default App;
