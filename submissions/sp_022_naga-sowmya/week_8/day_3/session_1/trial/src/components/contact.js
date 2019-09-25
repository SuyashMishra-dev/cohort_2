import React from 'react';

const Contact = () => {
    return (
        <div className="mt-3">
            <nav className="navbar navbar-light">
                <a className="navbar-brand">Contact</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div class="card-columns bg-light">
                <div class="card">
                    <img src="https://www.extremetech.com/wp-content/uploads/2019/05/637873-tesla-model-s-2019-640x360.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Sales</h5>
                    <p class="card-text">Toll free: 0800 004 029<br/>newzealand@tesla.com<br/>EnergyOrdersNZ@tesla.com</p>
                    </div>
                </div>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                    <p>First Responders<br/>Visit our first responders page to download Tesla reference guides for emergency personnel.</p>
                    </blockquote>
                </div>
                <div class="card">
                    <img src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/socialcard/MS.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Careers</h5>
                    <p class="card-text">Visit our careers page for a list of current employment opportunities.First Responders</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                    <p>Press<br/>North America<br />Press@tesla.com</p>
                    <footer class="blockquote-footer text-white">
                        <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                    <h5 class="card-title">Electric Cars</h5>
                    <p class="card-text">Every Tesla is designed to be the safest, quickest car in its class—with industry-leading safety, range and performance.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://amp.businessinsider.com/images/571fa66add089510618b47b7-750-375.jpg" class="card-img-top" alt="..."/>
                </div>
                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                    <p>Customer Support & Roadside Assistance<br/>Toll free: 0800 005 431<br/>Local: (04) 831-8723<br/>Safety recall information</p>
                    </blockquote>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Global Charging Network</h5>
                    <p class="card-text">Our global network of Superchargers and Destination Chargers provide convenient locations to stay charged, anywhere you go.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Contact;