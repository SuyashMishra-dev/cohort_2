import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="mt-4">Medium</h1>
                    <p className="offset-7  mt-4">Become a member</p>
                    <p className="text-info ml-3 mt-4">Sign in</p>
                    <button className="border border-info text-info rounded-lg ml-3 mt-4 h-100">Get started</button>

                </div>
                <div className="row">
                    <img src={'https://miro.medium.com/max/3151/1*Ms-JfTA1-Hk-3Drcz_Oi5A.jpeg'} />
                </div>
            </div>
        </div>
    )


}
export default Home;