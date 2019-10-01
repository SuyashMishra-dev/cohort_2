import React from 'react'

const About = () => {
    return(
        <div className="mt-3">
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/about-us-banner_910a11c0-aac8-4d48-994b-a08cc4f96e9f_1600x.jpg?v=1552007128" class="card-img" alt="about_img"/>
                <div className="card-img-overlay">
                    <h2 className="card-title text-center" style={{color:"black"}}>Our Mission</h2>
                    <h5 className="card-text text-black-60 text-center" style={{color:"black"}}>Proper technology experiences.</h5>
                </div>
            </div>
            <div className="text-center mt-3">
                <h2>Designed to do More</h2>
                <p className="text-black-50 mt-3 container">Studio Proper is a boutique product design studio based in Melbourne, Australia, focused on simplifying everyday interactions with technology in a beautiful and minimal fashion.</p>
                <p className="text-black-50 mt-3 container">Founded on the principal that good design should be seamless; we designed a range of mounts, stands, and accessories that fit cohesively in every use case with Apple devices.</p>
                <p className="text-black-50 mt-3 container">Studio Proper currently offers mounting solutions for the iPhone, iPad, and Apple Watch; featuring desk stands, travel accessories, wall mounts, and more. As well as a range of specialised Business Solutions designed to simplify point of sale experiences and create seamless customer interactions in retail, hospitality, and large enterprise.</p>
            </div>
        </div>
    )

}
export default About;