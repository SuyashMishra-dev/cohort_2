import React from "react";
import { Link } from "react-router-dom";

export default class Support extends React.Component {
    render() {
        return (
           <div>
               <div className="text-center">
               <h1 className="display-1 mt-5 mb-5 p-5"><strong>We are here to help! </strong></h1>
               <nav class="navbar navbar-light bg-light ">
                <form class="form-inline text-center">
                    <input class="form-control mr-sm-2 ml-5" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
            </div>
        
        

<div className="row border-shadow-5"> 
<div class="card col-md-3 ml-5" >

    <div class="card-body">
        <h5 class="card-title">Getting started? </h5>
        <p class="card-text">S Are you setting up Freshdesk for the first time? Here's all the information you'll need.</p>
    </div>
    <img src="https://company-assets.freshworks.com/freshdesk-portal/setup@2x.png" class="card-img-top" alt="gettng started"/>

</div>
<div class="card col-md-3 mr-5 ml-5" >
   
    <div class="card-body">
        <h5 class="card-title">Video Library</h5>
        <p class="card-text">Video LibraryHere's a collection of all our videos categorized under different playlists.
</p>
<img src="https://company-assets.freshworks.com/freshdesk/freshdesk-portal/video_library@2x.png" class="card-img-top" alt="vedio"/>
    </div>
</div>
<div class="card col-md-3 mr-5">
    <div class="card-body">
        <h5 class="card-title">Train your new agents</h5>
        <p class="card-text">Need to train your new agents on Freshdesk? Enroll them in the Academy for hands-on training.</p>
    </div>
    <img src="https://company-assets.freshworks.com/freshdesk-portal/training@2x.png" class="card-img-top" alt="..."/>

</div>

<div className="text-center ml-5">
    <h1>Knowledge base..</h1><br/>
    <h3 className="ml-5">
        Explore How-To's and learn best practices from our knowledge base.
        </h3>



    <div className="row">
        <div class="card text-white bg-success mb-3 ml-5 mr-3 col-md-5">
        <h5 class="card-title card-header">Get Started</h5>
            <div class="card-body">
                <p class="card-text">Set up your account, configure support channels, customize your portal to reflect your brand and more.</p>
            </div>
        </div>

        <div class="card text-white bg-success mb-3 ml-3 mr-5 col-md-5">
            <h5 class="card-title card-header">Configuring Automations</h5>
            <div class="card-body">
                <p class="card-text">Set up your account, configure support channels, customize your portal to reflect your brand and more.</p>
            </div>
        </div>
        
        <div class="card text-white bg-success mb-3 ml-5 mr-3 col-md-5">
        <h5 class="card-title card-header">Customer Portal Setup</h5>
            <div class="card-body">
                <p class="card-text">Set up your account, configure support channels, customize your portal to reflect your brand and more.</p>
            </div>
        </div>

        <div class="card text-white bg-success mb-3 ml-3 mr-5 col-md-5">
            <h5 class="card-title card-header">Live Chat</h5>
            <div class="card-body">
                <p class="card-text">Set up your account, configure support channels, customize your portal to reflect your brand and more.</p>
            </div>
        </div>

    </div>
</div>
</div>
</div>

               
                       

        )
    }
}


