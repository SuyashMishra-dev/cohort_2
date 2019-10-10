import React from 'react';
import { Link } from "react-router-dom";
import Fotter from "./Fotter"
// import '../../App.css';  
import './main.css';

export default class Main extends React.Component {
    render() {
        return (
            <div>   

                <div className="card bg-light text-white">
                    <img src="https://www.apple.com/v/iphone/home/ab/images/meta/og__byyl1jl4xsvm.png" className="card-img" alt="apple"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-center display-4 font-weight-bold">iPhone 11 Pro</h5>
                        <p className="card-text text-center text-dark display-4 font-weight-bold"><small>Pro Camera. Pro display. Pro Performance</small></p>
                        <h3 className="display-4 text-center" ><a href="#"><small>Learn ></small></a></h3>
                    </div>
                </div>

                <div className="p-3 mb-2 bg-light text-dark text-center">
                    <h1 className="mt-5 display-4  font-weight-bold">iPhone 11</h1>
                    <p className="font-weight-bold">Just the right amount everything.</p>
                    <h3 ><a href="#"><small>Learn ></small></a></h3>
                </div>
                <div>
                    <img width="100%"  height="600px" src="https://9to5mac.com/wp-content/uploads/sites/6/2019/09/iphone-11-hero.jpg?quality=82&strip=all&w=1600"alt="iphone pro"></img>
                </div>
                
                <div className="text-center">
                    <img  className="mt-5 mb-3" width="150px" src="https://www.trzcacak.rs/myfile/detail/29-294153_apple-watch-official-logo-apple-watch-logo-white.png"></img>
                    <h3 className=" text-danger font-weight-bold">SERIES 5</h3>
                    <h3 className="">With the new Always-on Retina display.</h3>
                    <h3 className="">You have never seen watch like this.</h3>
                    <h3 ><a href="#"><small>Learn More ></small></a></h3>
                    <img src="https://9to5mac.com/wp-content/uploads/sites/6/2018/10/Apple-Watch-Series-4-3.jpeg?quality=82&strip=all&w=1600
" className="card-img" alt="apple"/>
                </div>

                <div className="row">
                <div className="text-center col-md-6">
                <h1 className="mt-5 font-weight-bold">MacBook Air</h1>
                    <p className="font-weight-bold">Lightness strikes again.</p>
                    <h3 className="mb-5"><a href="#"><small>Learn More ></small></a></h3>
                    <img height="400px" src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTkvMDcvTWFjYm9va0Fpci12cy1NYWNib29rcHJvLTIwMTktMDAxLTYyMHg0MDAuanBn
" className="card-img" alt="apple"/>
                </div>
                <div className="text-center col-md-6">
                <h1 className="mt-4 font-weight-bold">iPad</h1>
                    <p className="font-weight-bold">Like a computer.</p>
                    <p className="font-weight-bold">Unlike any computer.</p>
                    <h3 className="mb-4"><a href="#"><small>Learn More ></small></a></h3>
                    <img height="407px" src="https://i-cdn.phonearena.com/images/article/118862-two_lead/The-iPad-7th-gen-is-a-great-deal-but-consider-this-before-buying-one.jpg" className="card-img" alt="apple"/>
                </div>

                <div className="text-center mt-5 col-md-6">
                    <img height="400px" src="https://cdn.pocket-lint.com/r/s/320x/assets/images/147478-tablets-vs-apple-ipad-air-2019-vs-ipad-97-2018-which-should-you-buy-image1-t7zlhw3izg.jpg?v1" className="card-img" alt="apple"/>
                </div>
                <div className="text-center mt-5 col-md-6">
                    <img height="400px" src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/w830_wm_brw/public/article_images/2019/08/ipad-chromebook-hero-2.jpg?itok=MccjpH6C" className="card-img" alt="apple"/>
                </div>

                <div className="text-center mt-5 col-md-6">
                    <img height="400px" src="https://cdn.macrumors.com/article-new/2019/03/ipadairipadmini-1-800x450.jpg" className="card-img" alt="apple"/>
                </div>
                <div className="text-center mt-5 col-md-6">
                    <img height="400px" src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/w830_wm_brw/public/article_images/2019/08/ipad-chromebook-hero-2.jpg?itok=MccjpH6C" className="card-img" alt="apple"/>
                </div>

                </div>
            
                       
            </div>

        )
    }
}


