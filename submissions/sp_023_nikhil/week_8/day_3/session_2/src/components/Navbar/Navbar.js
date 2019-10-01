import React from 'react';
import { Link, Route } from 'react-router-dom'
import OrderFood from '../OrderFood/OrderFood'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light container" style={{ background: styles.white, height:"10px;" }}>
                <div>
                    <img style={{ wigth: "28px", height: "28px" }} alt="" src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg" />
                    <button className="font-weight-bold btn" style={{ background: styles.white }} >Get the App</button>
                </div>
                <form className="form-inline">
                    <img alt="" style={{ wigth: "28px", height: "28px" }} src="https://b.zmtcdn.com/images/icons/order-online.svg" />
                    <Link to="/order-food" className="ml-2 font-weight-bold btn" style={{ background: styles.white }}>Order Food</Link>
                    <img className="ml-3" alt="" style={{ wigth: "28px", height: "28px" }} src="https://b.zmtcdn.com/images/icons/book-a-table.svg" />
                    <Link className="font-weight-bold btn" style={{ background: styles.white }}>Book a table</Link>
                    <img className="ml-3" alt="" style={{ wigth: "28px", height: "28px" }} src="https://b.zmtcdn.com/images/icons/header_gold_icon.svg" />
                    <Link className="font-weight-bold btn" style={{ background: styles.white }} >Zomato Gold</Link>
                </form>
            </nav>
            <Route path="/order-food" component={OrderFood} />
        </React.Fragment>
            )
        }
        
        
    
    const styles = [
        {
            white: "white"
        }
    ]


export default Navbar;