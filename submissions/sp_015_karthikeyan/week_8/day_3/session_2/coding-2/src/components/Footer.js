import React from 'react';
import FooterList from './basic/FooterList';

const Footer = () => {
    let obj = [
        {
            heading: 'PRODUCT & SERVICE',
            items: [ 'Smartphones',
            'Tablets',
            'Wearables',
            'Accessories',
            'Televisions',
            'Audio',
            'Refrigerators',
            'Cooking Appliances',
            'Washing Machines',
            'Air Conditioners',
            'Monitors',
            'SSD',
            'Memory Cards' ]
        },
        {
            heading: 'SHOP',
            items: [ 'Offers',
            'Exchange',
            'Shop FAQ',
            'Shop Terms of Use',
            'Shop Terms of Service',
            'Store Locator' ]
        },
        {
            heading: 'SUPPORT',
            items: [ 'Write to Our CEO',
            'Email Us',
            'Chat with Us',
            'Phone',
            'Community',
            'Product registration' ]
        },
        {
            heading: 'ABOUT US',
            items: [ 'About Us',
            'Investor Relations',
            'Newsroom',
            'Careers',
            'Environment',
            'Samsung Opera House',
            'Samsung Recycling' ]
        }
    ]
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    {obj.map(ele => <FooterList data={ele}/>)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;