import React, { Component } from 'react'
import axios from 'axios'


export default class Homedecor extends Component {
    state = {
        photos: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            console.log(res)
            this.setState({
                photos: res.data.slice(0,10)
            })
        })
    }
    render() {
        const { photos } = this.state;
        const photosItems = photos.length ? (photos.map(pht => {
            return(
                <div className= "photo card" key={pht.id}> 
                <div className="card-content">
                  <h2> <span className="card-title">{pht.title}</span></h2>
                   <p> <img src ={pht.thumbnailUrl} alt =" " /></p>
                </div>
                </div>

            )
        })) : (
            <div > No photos yet </div>
        )
        return (
            <div>
                welcom
                Abstarct Paintings for Home decor.
                {photosItems}
            </div>
        )
    }
}
