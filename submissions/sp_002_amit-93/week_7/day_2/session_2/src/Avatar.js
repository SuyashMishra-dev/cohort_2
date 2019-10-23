import React from 'react';
import './Avatar.css';
import List from './List';

const Avatar = () => {
    return (
    <div>
     <h1 style={{textAlign:"center"}}>Restaurant</h1>

      <List  name="food" work="Star Rating"/>
      <List name="Eat fit" work="Star Rating"/>
      <List name="Box8" work="Star Rating"/>
      <List name="fresh Menu" work="Star Rating"/>
      
    <button>Order </button>
        
   
    </div>
    )
}

export default Avatar;