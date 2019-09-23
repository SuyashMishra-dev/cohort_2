import React from 'react';
import styles from './mystyle.module.css';

export default function Products(props){
    return(
        <div>
            <div>
                <h1>{props.name}</h1>
                <h2>Mobile Operating System</h2>
                <ul>
                <li>Android</li>
                <li>Blckberry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
                </ul>
            </div>

            <div>
                <h2>Mobile Manufacturers</h2>
                <ul>
                <li>Samsung</li>
                <li>HTC</li>
                <li>Micromax</li>
                <li>Apple</li>
                </ul>
            </div>
        </div>
    );
}