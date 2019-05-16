import React from "react"
function Home() {
    return(
        <>
            <div className= "heroImageW">
        <img src="images/hero.jpg" alt="Hero Image" className= "heroImage" />>
        <div className="container">
            <div className="search">
                <div className="row">
                    <div className="col-sm-12 searchHeading">
                        <h1>Plan your stay in luxury.</h1>
                    </div>
                    <div className="col-sm-12 heroForm">
                        <a href="/products"><i className="fas fa-search"></i>Let's Begin!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="container-fluid whContainer">
        <div className="row whatsHappening">
            <div className="col-sm-12 whTitle">
                <h2>What's Happening</h2>
            </div>
            <div className="box">
                <div className="beachBox">Relax</div>
            </div>
            <div className="box">
                <div className="concertBox">Rock Out</div>
            </div>
            <div className="box">
                <div className="sitesBox">Explore</div>
            </div>
        </div>
    </div>


    </>
    )
}

export default Home