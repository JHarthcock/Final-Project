import React from "react"
function Header() {
    return(
        <div className="container-fluid topContainer">
            <div className="row navBarT">
                <div className="col-sm-2">
                    <img src="/images/luxLogo.png" alt="Logo" />
                </div>
                <div className="col-sm-10">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="#link">About</a></li>
                        <li><a href="#link">FAQ</a></li>
                        <li><a href="#link">Log in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header