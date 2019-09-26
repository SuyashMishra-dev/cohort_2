import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import Shop from './components/Shop';
import Mobiles from './components/Mobiles';
import Footer from './components/Footer'
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='navbar-fixed'>
            <nav className='white'>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo center black-text'>SAMSUNG</Link>
                    <ul className='left'>
                        <li><Link to='/mobile' className='black-text'>Mobile</Link></li>
                        <li><Link to='/tv-av' className='black-text'>TV & AV</Link></li>
                        <li><Link to='/appliances' className='black-text'>APPLIANCES</Link></li>
                        <li><Link to='/computing' className='black-text'>COMPUTING</Link></li>
                        <li><Link to='/' className='black-text'>SHOP</Link></li>
                    </ul>
                    <ul className='right'>
                        <li><Link to='/explore' className='black-text'>EXPLORE</Link></li>
                        <li><Link to='/support' className='black-text'>SUPPORT</Link></li>
                        <li><Link to='/business' className='black-text'>BUSINESS</Link></li>
                        <li><Link to='/account'><i class="material-icons black-text">account_circle</i></Link></li>
                        <li><Link to='/account'><i class="material-icons black-text">shopping_cart</i></Link></li>
                        <li><Link to='/account'><i class="material-icons black-text">search</i></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <Route path='/' exact component={Shop} />
        <Route path='/mobile' exact component={Mobiles}/> 
        <Route path='/account' exact component={Cart} />
        <img src='//images.samsung.com/is/image/samsung/p5/in/mobile/24-7-banner_pc.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
        <hr></hr>   
        <Footer />    
      </BrowserRouter>
    )
  }
}

export default App;