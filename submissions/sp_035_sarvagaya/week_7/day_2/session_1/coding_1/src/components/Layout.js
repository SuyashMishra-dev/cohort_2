import React from "react";
import "./Layout.css";

function Layout(props)
{
    return(
        <div className="mainDiv">
            <div className="firstDiv">
                <div className="pro">PRO</div>
                <img style={{height: 100, width: 100, borderRadius: "100%"}} src="https://i.pinimg.com/originals/c5/43/1d/c5431dbb6d577601e76f1a14c960a198.jpg" />
                <h4>{props.llist.name}</h4>
                <h6>{props.llist.location}</h6>
                <p>{props.llist.description}</p>
                <div>
                    <button className="messageBtn">Message</button>
                    <button className="followingBtn">Following</button>
                </div>
            </div>
            <div className="secondDiv">
                <p className="Skills">Skills</p>
                <p className="ui">{props.llist.skills[0]}</p>
                <p className="developer">{props.llist.skills[1]}</p>
                <p className="html">{props.llist.skills[2]}</p>
                <p className="css">{props.llist.skills[3]}</p>
                <p className="js">{props.llist.skills[4]}</p>
                <p className="react">{props.llist.skills[5]}</p>
                <p className="node">{props.llist.skills[6]}</p>
            </div>
        </div>
    )
}

export default Layout;