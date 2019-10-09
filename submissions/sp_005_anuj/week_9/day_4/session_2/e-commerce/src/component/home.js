import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latest : [
                {
                img :  "c1i1.jpeg",
                name : 'EA SPORTS™ FIFA 20',
                btn : 'Click',
            },
            {
                img: 'c1i2.jpeg',
                name: ' NBA 2K20',
                btn: 'CLick',
            },
            {
                img : 'c1i3.jpeg',
                name: 'Call of Duty',
                btn: 'CLick',
            },
            {
                img: 'c1i4.jpeg',
                name: 'Death Stranding',
                btn: 'Click'
            }
            ],
        all_time: [
                 {
                img :  "c2i1.jpg",
                name : 'God Of War',
                btn : 'Click',
            },
            {
                img: 'c2i2.jpg',
                name: 'Witcher 3',
                btn: 'CLick',
            },
            {
                img : 'c2i3.jpg',
                name: 'GTA V',
                btn: 'CLick',
            },
            {
                img: 'c2i4.jpg',
                name: 'Battlefiled 3',
                btn: 'Click',
            },
        ],
        most: [
                 {
                img :  "c3i1.jpg",
                name : 'Counter Strike',
                btn : 'Click',
            },
            {
                img: 'c3i2.jpg',
                name: 'Need For Speed',
                btn: 'CLick',
            },
            {
                img : 'c3i3.jpg',
                name: 'Assassins Creed',
                btn: 'CLick',
            },
            {
                img: 'c3i4.jpg',
                name: 'Far Cry',
                btn: 'Click',
            },
        ]
        }
    }
    render() {
        return(
            <div>

                {/* Crousel Section Start */}

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="s1.jpg" class="d-block w-100" style = {{height: "665px"}} alt="s1"/>
                        </div>
                        <div class="carousel-item">
                            <img src="s2.jpg" class="d-block w-100" style={{ height: "665px" }} alt="s2"/>
                        </div>
                        <div class="carousel-item">
                            <img src="s3.jpg" class="d-block w-100" style={{ height: "665px" }} alt="s3"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                {/* Crousel Section Ends */}

                {/* Card Section Starts Here */}
                <div className = "jumbotron-fluid mt-1 bg-img">
                    <div className = "text-light">
                        <h1 className = "text-center font-family">Latest Release</h1>
                        {
                            this.state.latest.map(item=> {
                            return (
                            <div className = "container float-right w-25">
                                <div className = "card-body">
                                    <img src = {item.img} className = "card-img rounded-circle ml-5" style = {{height: "200px", width: "200px"}}/>
                                    <div className = "card-body font-family">
                                        <h4 className = "text-center">{item.name}</h4>
                                        <center>
                                        <button className = "btn btn-outline-danger">Details</button>
                                        </center>
                                    </div>  
                                </div>
                            </div> 
                            )})}
                    </div>   
                    <div className = "text-light">
                        <h1 className = "text-center mt-5 font-family">All Time Popular</h1>
                        {
                            this.state.all_time.map(item=> {
                            return (
                            <div className = "container float-right w-25">
                                <div className = "card-body">
                                    <img src = {item.img} className = "card-img rounded-circle ml-5" style = {{height: "200px", width: "200px"}}/>
                                    <div className = "card-body font-family">
                                        <h4 className = "text-center">{item.name}</h4>
                                        <center>
                                        <button className = "btn btn-outline-danger">Details</button>
                                        </center>
                                    </div>  
                                </div>
                            </div> 
                            )})}
                    </div>  
                     <div className = "text-light">
                        <h1 className = "text-center mt-5 font-family text-light">Most Popular</h1>
                        {
                            this.state.most.map(item=> {
                            return (
                            <div className = "container float-right w-25">
                                <div className = "card-body">
                                    <img src = {item.img} className = "card-img rounded-circle ml-5" style = {{height: "200px", width: "200px"}}/>
                                    <div className = "card-body font-family">
                                        <h4 className = "text-center">{item.name}</h4>
                                        <center>
                                        <button className = "btn btn-outline-danger">Details</button>
                                        </center>
                                    </div>  
                                </div>
                            </div> 
                            )})}
                    </div>
                    {/* <div>&nbsp</div> */}
                    <div>.</div>
                </div>

                {/* Card Section Ends Here */}

            </div>               
        )}
}
export default Home;