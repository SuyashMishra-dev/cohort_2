import React from 'react';
import { directive, tsImportEqualsDeclaration } from '@babel/types';

class List extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.heading}</h1>
                <ul>
                <li>{this.props.name}</li>
                </ul>
            </div>
        );
    }
 }
export default List