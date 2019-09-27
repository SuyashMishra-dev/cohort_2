import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mobile from "./components/Mobile";
import Buttons from "./components/Buttons";
import ButtonList from "./components/ButtonList";
import List from "./components/List";
import Layout from "./components/Layout";
import LayoutList from "./components/LayoutList";

const mob= List.map(items=><Mobile key={items.id} list={items} />)

const btn= ButtonList.map(items=><Buttons key={items.id} blist={items} />)

const design=LayoutList.map(ele=><Layout key={ele.id} llist={ele} />)

function App() {
  return (
    <div className="App">
      <div>
        {mob}
      </div>
      <div>
        {btn}
      </div>
      <br />
      <div>
      {design}
      </div>
    </div>
  );
}

export default App;
