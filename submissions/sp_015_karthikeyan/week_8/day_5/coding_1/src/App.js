import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Shop from './components/Shop';
import Mobiles from './components/Mobiles';
import Footer from './components/Footer'
import Cart from './components/Cart';
import DetailedView from './components/DetailedView'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showcaseData : [
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-note10-sm-n97-sm-n970fzsdins-frontauraglow-thumb-178503704?$PF_PRD_PNG$',
              text: 'Galaxy Note 10',
              price: '₹ 79,900.00',
              id: 'galaxy-note10'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a80-a805f-sm-a805fzkuins-frontblack-thumb-177355994?$PF_PRD_PNG$',
              text: 'Galaxy A80',
              price: '₹ 47,990.00',
              id: 'galaxy-a80'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-s10-sm-g973-sm-g973fzwgins-frontprismwhite-thumb-146960193?$PF_PRD_PNG$',
              text: 'Galaxy S10',
              price: '₹ 76,900.00',
              id: 'galaxy-s10'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a50-a505f-4gb-sm-a505fzwdins-white-thumb-158155301?$PF_PRD_PNG$',
              text: 'Galaxy A50 (4GB RAM)',
              price: '₹ 18,490.00',
              id: 'galaxy-a50'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-m20-m205f-4gb-sm-m205fdagins-black-thumb-thumb-143690879?$PF_PRD_PNG$',
              text: 'Galaxy M20 (4GB RAM)',
              price: '₹ 11,990.00',
              id: 'galaxy-m20'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-note9-n960-sm-n960fzkdins-frontblack-thumb-112489220?$PF_PRD_PNG$',
              text: 'Galaxy Note9',
              price: '₹ 67,900.00',
              id: 'galaxy-note9'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a10-a105f-sm-a105fzkgins-black-thumb-thumb-152176207?$PF_PRD_PNG$',
              text: 'Galaxy A10 (2GB RAM)',
              price: '₹ 7,990.00',
              id: 'galaxy-a10'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a30-a305f-sm-a305fzbfins-lightblue-thumb-thumb-152170783?$PF_PRD_PNG$',
              text: 'Galaxy A30 (4GB RAM)',
              price: '₹ 15,490.00',
              id: 'galaxy-a30'
          },
          {
              imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-m40-m405f-128gb-sm-m405fzbdins-thumb-170135922?$PF_PRD_PNG$',
              text: 'Galaxy M40',
              price: '₹ 20,490.00',
              id: 'galaxy-m40'
          }
      ]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='navbar-fixed'>
            <nav className='white'>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo black-text center'><span style={{color: '#0d47a1', fontWeight: 'bolder'}}>SAMSUNG</span></Link>
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
        <Switch>
          <Route path='/' exact component={Shop} />
          <Route path='/mobile' exact render={props => <Mobiles data={this.state.showcaseData} {...props} />}/> 
          <Route path='/mobile/:id' render={props => {
              let temp = this.state.showcaseData.filter(ele => ele.id === props.match.params.id);
              console.log(temp);
              return <DetailedView data={temp} />
          }} />
          <Route path='/account' exact component={Cart} />
          <Route render={() => <h1 className='center'>Error 404 - Page not found</h1>} />
        </Switch>
        <hr></hr>   
        <Footer />    
      </BrowserRouter>
    )
  }
}

export default App;