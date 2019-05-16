import React from "react"
function Footer() {
    return(
    <>
        <div className="container-fluid bottomContainer">
            <div className="row navBarB">
                <div className="col-sm-6">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <div className="col-sm-3">
                    <h4>Contact Us!</h4>
                    <p>Luxurylodging@email.com</p>
                    <p>601-888-8888</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer