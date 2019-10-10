import React from 'react';
import generalStyles from '../general.module.css'
import SubSideBar from '../Components/SubSideBar';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collection : {
                Furniture : ['Chairs','Sofas','Desks','Beds','Storage','Outdoor','Dining Tables'],
                Lighting : ['Pendent','Wall and Ceiling','Table and desk','Floor'],
                Accessories : ['Glassware','office','kids','GiftCards'],
                Clearance : [],                
            },
            selectedCategory:null,
            show : false
        }
        
    }
    
    displaySubSideBar = (category) => {
        if (this.state.selectedCategory === category) {
            this.setState({
                show : !this.state.show
            })
        } else {
            this.setState({
                selectedCategory : category,
                show:true
            })
        }
        
    }

    toggleSubSideBar = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        
        return (
            <React.Fragment>
                <h1 className="text-center display-3">haus</h1>
                
                <div className="list-group mt-5">
                    {
                        Object.keys(this.state.collection).map(category=>(
                            <a 
                                className={
                                `
                                list-group-item list-group-item-action  
                                ${generalStyles.bgcolor+' '
                                +generalStyles.textColor+' '
                                +generalStyles.borderGeneral+' '
                                +generalStyles.gFontSize}
                                `}
                                
                                onClick={()=>this.displaySubSideBar(category)}

                            >
                                {category}
                            </a>))
                    }
                </div>
                {this.state.selectedCategory!==null? <SubSideBar toggle={this.toggleSubSideBar} items={this.state.collection[this.state.selectedCategory]} active={this.state.show} /> : ''}
                
            </React.Fragment>
        )
    }
}

export default Sidebar;