import React from 'react'
import './style.css'
const Home = () => {
    return (
        <div className = "row">
        <div className = "col-lg-6 col-sm-12 col-md-12 " style = {{backgroundColor : "rgba(0,0,0,0.5)"}}>
                 <img className = "w-100" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSsRLc0GimWRSr739ZENydGfgK8gKrtw-sRvUyRZRlMGSiExLd" style = {{height:"90%"}}></img>
            </div>

            <div className = "col-lg-6 col-sm-12 col-md-12" style = {{backgroundColor : "rgba(0,0,0,0.5)"}}>
                <img className = "w-100" src = "https://t4.ftcdn.net/jpg/01/45/93/63/500_F_145936385_eISFtVefWQfLhc8GJ9p2BADnOzQWY1z3.jpg" style = {{height:"90%"}}></img>
            </div>
        </div>
    )
}

export default Home
