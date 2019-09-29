import React from 'react';
import './PageStyle.css';
import MacHome from './HomeComponent/MacHome';
import {BrowserRouter, Route} from 'react-router-dom';
import LearnMore from './HomeComponent/LearnMore';
import Buy from './HomeComponent/Buy';


export default class Home extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className = "col">
                    <MacHome />
                </div>
            </BrowserRouter>
        )
    }
} 
