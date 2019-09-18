import React from 'react';
import { directive, tsImportEqualsDeclaration } from '@babel/types';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
         os : ["Mobile Operating Sysytem","Android", "Blackberry","iPhone","Windows Phone"]
        //  mfg : ["Mobile Manufactures", "Samsung","HTC", "Micromax","Apple",]
        }
   return(
    <div>
        <h1>{this.state.os[0]}</h1>
        <ul>
        <li>{this.state.os[1]}</li>
        <li>{this.state.os[2]}</li>
        <li>{this.state.os[3]}</li>
        <li>{this.state.os[4]}</li>
        </ul>
    </div>
   )
    }
}
export default List;