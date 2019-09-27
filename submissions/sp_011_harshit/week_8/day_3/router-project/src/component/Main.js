import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Head from './Head'
import Business from './Business'
import Grow from './Grow'
import Product from './Product'


class  Main extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            image:[
                {
                    h1:"Pecans and Politics: Inside the Mind of a 12-Year-Old Founder",
                  
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/coming-soon-page.jpg?v=1566849545&width=600"
                },
                {
                    h1:" How to Step Out of Your Comfort Zone and Pitch On National TV",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/glovestix-blog.jpg?v=1569005475&width=600"
                },
                {
                    h1:"Social Studies and Stationery: Inside the Mind of a 10-Year-Old Founder",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/glovestix-blog.jpg?v=1569005475&width=600"
                },
                {
                    h1:"Overdraft: How This Army Vet Fought His Way out of a Financial Ambush",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/Kamaria_Warren_v1.jpg?v=1567004476&width=600"
                },
                {   h1:"How to Create Your Own Viral Moments",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/peacecollective-blog.jpg?v=1568041557&width=600",
                },
                {
                    h1:"When to Pursue Capital: Key Financial Moments for Entrepreneurs and Growing Businesses",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/finances-and-budget_1.jpg?v=1568222256&width=600"
                },
                {
                    h1:"The Business of DIY: 10 Things to Make and Sell Online",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/things-to-make-and-sell-hero.jpg?v=1491361270&width=600"

                },
                {
                        h1:"Overdraft: The Dark Side of Overnight Success",                  
                        url:"https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_Gingie.jpg?v=1566920461&width=600"
                }
              
            ],
            image2:[
                {
                    h1:"Pecans and Politics: Inside the Mind of a 12-Year-Old Founder",
                  
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/things-to-make-and-sell-hero.jpg?v=1491361270&width=600"
                },
                {
                    h1:" How to Step Out of Your Comfort Zone and Pitch On National TV",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/services-hero_ffce9f89-3c02-425c-8126-d922c54f18f4.jpg?v=1498018002&width=600"
                },
                {
                    h1:"Social Studies and Stationery: Inside the Mind of a 10-Year-Old Founder",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/image3_e0dac7e0-6240-4953-9580-cf05b2463a44.jpg?v=1535472273&width=600"
                },
                {
                    h1:"Overdraft: How This Army Vet Fought His Way out of a Financial Ambush",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/business-ideas-hero1.jpg?v=1558495728&width=600"
                },
                {   h1:"How to Create Your Own Viral Moments",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/peacecollective-blog.jpg?v=1568041557&width=600",
                },
                {
                    h1:"When to Pursue Capital: Key Financial Moments for Entrepreneurs and Growing Businesses",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/finances-and-budget_1.jpg?v=1568222256&width=600"
                },
                {
                    h1:"The Business of DIY: 10 Things to Make and Sell Online",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/things-to-make-and-sell-hero.jpg?v=1491361270&width=600"

                },
                {
                        h1:"Overdraft: The Dark Side of Overnight Success",                  
                        url:"https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_Gingie.jpg?v=1566920461&width=600"
                }
              
            ],
            image3:[
                {
                    h1:"Pecans and Politics: Inside the Mind of a 12-Year-Old Founder",
                  
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-chat.jpg?v=1565699186&width=600"
                },
                {
                    h1:" How to Step Out of Your Comfort Zone and Pitch On National TV",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/Merchant_Blog_-_Roundup_1.jpg?v=1560889759&width=600"
                },
                {
                    h1:"Social Studies and Stationery: Inside the Mind of a 10-Year-Old Founder",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-retail-kit.jpg?v=1556132827&width=600"
                },
                {
                    h1:"Overdraft: How This Army Vet Fought His Way out of a Financial Ambush",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/AR_hero_blog_ART.jpg?v=1536951978&width=600"
                },
                {   h1:"How to Create Your Own Viral Moments",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/peacecollective-blog.jpg?v=1568041557&width=600",
                },
                {
                    h1:"When to Pursue Capital: Key Financial Moments for Entrepreneurs and Growing Businesses",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/finances-and-budget_1.jpg?v=1568222256&width=600"
                },
                {
                    h1:"The Business of DIY: 10 Things to Make and Sell Online",
                    url:"https://cdn.shopify.com/s/files/1/0070/7032/files/things-to-make-and-sell-hero.jpg?v=1491361270&width=600"

                },
                {
                        h1:"Overdraft: The Dark Side of Overnight Success",                  
                        url:"https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_Gingie.jpg?v=1566920461&width=600"
                }
              
            ],
        }
    }
    render(){
return(
    <Router>

        <div className="App">
            <div className="row container col-xl-8 offset-2" style={{backgroundColor:"navy"}}>
                    <h1 className="text-left text-white"><i>Shopify</i></h1>
            </div>
            <img src="https://cdn.shopify.com/assets2/content-marketing/blog/shop-banner-1cab21ffb1c86c878cad375267f3aade09908a1b011d580a17abb2e474aefbbd.jpg" />
            <div className="conatiner row offset-2">
            
            <Link to="/"><h3 className="text-secondary col-xl-12 ">Latest Article</h3></Link>    
            <Link to="/Business"><h4 className="text-secondary ml-3 ">Business Ideas</h4></Link>
            <Link to="/Grow"><h4 className="text-secondary ml-3">Grow Your Sales</h4></Link>
            <Link to="/Product"><h4 className="text-secondary ml-3">Contact Us</h4></Link>

            </div>
                </div>
        <div>
<Route path="/" exact render={()=><Head imgg={this.state.image }/>} />
            <Route path="/Business" exact render={()=><Business imgg={this.state.image2} />}/>
            <Route path="/Grow"  render={()=><Grow imgg={this.state.image3}/>} />
            <Route path="/Product" exact component={Product} />
   
            
            
        </div>

    </Router>
    
)
}
}
export default Main