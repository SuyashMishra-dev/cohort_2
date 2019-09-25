import React from 'react';
function Show1(props){
  console.log(props.item)    
  return (
        <div >
          <h3>{props.items.head1}</h3>
          <ul>
              {props.items.arr1.map(a =>
                  <li>{a}</li>
            )}
          </ul>
          <h3>{props.items.head2}</h3>
          <ul>
              {props.items.arr2.map(b =>
                <li>{b}</li>

                )}
          </ul>
        </div>
      )
  }
  

export default Show1;  