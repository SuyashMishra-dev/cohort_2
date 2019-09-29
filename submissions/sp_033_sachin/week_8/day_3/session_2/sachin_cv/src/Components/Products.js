import React from 'react';
import Chairs from './Collection/Chairs';
import TableAndDesk from './Collection/TableAndDesk';

class Products extends React.Component{

    constructor(props){
        super(props);

    }


    render() {
        
        switch (this.props.match.params.product) {
            case 'chairs':
                return (<Chairs />)
                break;
            
            case 'table-and-desk':
                return (<TableAndDesk />)
                break;

            default:
                return (<h1>Page Not Found</h1>)
                break;
        }
    }
}

export default Products;