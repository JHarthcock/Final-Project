import React, { Component } from "react"
import ProductSingleTile from "./ProductSingleTile";

class ProductSingle extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            product: {
                location: "",
                img: "",
                type: "",
                bedrooms: ""
            }
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/home")
        .then(response => response.json())
        .then(products => {
            let product = products.find(item => item.id === Number(this.props.match.params.id) ? item : null)
            this.setState({product, loading: false})
        })
        .catch(err => console.log(err))
    }

    render() {
        const product = this.state.loading ? "loading..." : <ProductSingleTile {...this.state.product} />
        return (
        <>
            {product}
        </>
        )
    }
}

export default ProductSingle