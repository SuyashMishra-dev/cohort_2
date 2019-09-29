import React, { Component } from 'react';
import ShowcaseElement from './ShowcaseElement';

class Showcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    src: 'https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-business_3x2-small.jpg?804',
                    firstLine: 'Business Solutions for iPad & iPhone',
                    secondLine: 'Our flagship range of powered business solutions keeps your iPad securely mounted and charged at all times.',
                    btnName: 'Shop Business',
                },
                {
                    src: 'https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-ipad_3x2-small.jpg?804',
                    firstLine: 'iPad Cases & Mounts',
                    secondLine: 'Expand the functionality of your iPad in every walk of life by connecting to a range of stands and mounts.',
                    btnName: 'Shop iPad',
                },
                {
                    src: 'https://cdn.shopify.com/s/files/1/0173/8828/files/primary-category-power_3x2-small.jpg?804',
                    firstLine: 'Wireless Charging',
                    secondLine: 'Our first ever wireless charger, featuring a tempered glass surface and an anodised aluminium base.',
                    btnName: 'Shop Power Uno',
                },
            ],
        }
    }
    
    render() {
        return (
            <div className="row col-10 offset-lg-1 mt-5">
                {/* <ShowcaseElement />
                <ShowcaseElement />
                <ShowcaseElement /> */}
                {this.state.data.map((element, index) => {
                    return (
                        <div className="col mr-5 ">
                            <ShowcaseElement info={element} />
                        </div>
                        // <ShowcaseElement info={[...data]}/>
                    );
                })}
            </div>
        );
    }
}

export default Showcase;