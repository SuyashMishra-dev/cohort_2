import React from "react";
import List1 from "./color.js";
import './App.css';

function Button(props)
{
    
    return(
        <div class="flex">
          <button style={{backgroundColor:props.list1.color}}>{props.list1.name}</button>
        </div>
    )
}

export default Button;