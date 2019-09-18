import React from 'react';
import '../../App.css';
import styles from './btnfunc.module.css';
export default function Btnfunc(){
  return(
  	<div> 
  	<table> 
  	<tr> 
  	<td>
   <button className = {styles.colorblue}> Join Us </button>
  	</td>
  	<td>
  	<button className = {styles.colorred}> Settings </button>
  	</td>
  	</tr>
	  <tr> 
  	<td>
   <button className = {styles.colorpink}> Contact us </button>
  	</td>
  	<td>
  	<button className = {styles.colororange}> Login </button>
  	</td>
  	</tr>
	  <tr> 
  	<td>
   <button className = {styles.colorpurple}> Home </button>
  	</td>
  	<td>
  	<button className = {styles.coloryellow}> Download </button>
  	</td>
  	</tr>
	  <tr> 
  	<td>
   <button className = {styles.colorgrey}> Search </button>
  	</td>
  	<td>
  	<button className = {styles.colorgreen}> Help </button>
  	</td>
  	</tr>
  	</table>
  	</div>
  	);

  }	
