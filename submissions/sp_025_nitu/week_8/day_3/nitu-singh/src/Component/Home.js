import React from 'react';
import Feature from './featured.js';
import Value from './value.js';
import Instragram from './instragram.js';
import Information from './information.js';


function Home (){
    console.log('Home is called')
return(
<div style={{"marginTop":"-100px"}}> 
    <img className="w-100 mt-5"src="https://cdn.shopify.com/s/files/1/0135/4542/t/3/assets/home-slider-slide-1.jpg?8"></img>
    <Feature />
    <Value />
    <Instragram />
    <Information />
</div>
);
}
export default Home;