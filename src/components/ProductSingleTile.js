import React from "react"

function ProductSingleTile(props) {
    return (
        <div className="product-single-wrapper">
            <div className="container">
                <div className="row">
                    <div class="col-sm-12">
                        <img src={`/images/${props.img}`} alt="House" class="img-responsive"/>
                    </div>
                    <div class="col-sm-3">
                        <h3>Type</h3>
                        <p>{props.type}</p>
                    </div>
                    <div class="col-sm-3">
                        <h3>Location</h3>
                        <p>{props.location}</p>
                    </div>
                    <div class="col-sm-3">
                        <h3>Bedroom</h3>
                        <p>{props.bedrooms}</p>
                    </div>
                    <div class="col-sm-3">
                        <h3>Bathrooms</h3>
                        <p>{props.bathrooms}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSingleTile