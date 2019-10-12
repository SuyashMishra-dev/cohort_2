import React from "react";
import {BrowserRouter , Route} from "react-router-dom";
import LetsStart from "./component/LetsStart";
import createProfile from "./component/CreateProfile";
import Home from "./component/Home";
import CreateProfile from "./component/CreateProfile";
import PlayerProfile from "./component/PlayerProfile";

function App()
{
    return(
        <div>
            <div className="row" style={{backgroundColor: "#132e3b"}}>
                <div className="col-6 text-right">
                    <h1 className="text-light">Cricket</h1>
                </div>
                <div className="col-6">
                    <h1 style={{color:"red", fontStyle: "font-family: 'Kalam', cursive"}}>खलबली </h1>
                </div>
            </div>

            <React.Fragment>
                <BrowserRouter>
                    <Route path = "/" exact component={LetsStart} />
                    <Route path = "/home" component={Home} />
                    <Route path = "/createprofile" component={CreateProfile} />
                    <Route path = "/playerprofile" component={PlayerProfile} />
                </BrowserRouter>
            </React.Fragment>
        </div>
    )
}

export default App