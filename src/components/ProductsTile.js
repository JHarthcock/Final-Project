import React from "react"

function ProductsTile(props) {
    console.log(props)
    return (
        <div className="container">
            <a href={"/products/" + props.id} >
                <div class="row products">
                    <div class="col-sm-4">
                        <h3>Beds</h3>
                        <p>{props.bedrooms}</p>
                        <h3>Bathrooms</h3>
                        <p>{props.bathrooms}</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>Location</h3>
                        <p>{props.location}</p>
                        <h3>Type</h3>
                        <p>{props.type}</p>
                    </div>
                    <div class="col-sm-4">
                        <img src={`/images/${props.img}`} width="375px" alt="House" />
                    </div>
                </div> 
            </a>
        </div>
    )
}

export default ProductsTile