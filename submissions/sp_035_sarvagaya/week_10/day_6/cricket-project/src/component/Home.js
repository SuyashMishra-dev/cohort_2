import React from "react";
import {Link} from "react-router-dom";


class Home extends React.Component
{
    render()
    {
        return(
            <div className="row" style={{backgroundColor: "black", height: 650}}>
                <div className="col-6">
                    <Link className="text-decoration-none text-center" to="/createprofile">
                        <img style={{height: 650, width: 750}} src="https://www.tokkoro.com/picsup/5524488-cricket-wallpapers.jpg" />
                        <h2 style={{marginTop: -600, color: "white"}}>Create Profile</h2>
                    </Link>
                </div>
                <div className="col-6">
                    <Link className="text-decoration-none text-center" to = "/playerprofile">
                        <img style={{height: 650, width: 750}} src="https://livewallpaperswide.com/wp-content/uploads/2017/02/1487591475_997_cricket-wallpaper.jpg" />
                        <h2 style={{marginTop: -600, color: "white"}}>Show Profile</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;