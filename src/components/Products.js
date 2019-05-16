import React, { Component } from "react"
import ProductsTile from "./ProductsTile"

class Products extends Component {
    constructor() {
        super()
        this.state ={
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/home")
        .then(response => response.json())
        .then(data => {
            this.setState({data: data, loading: false})
            console.log(this.state.data[0].home_type)
        })
        .catch(err => console.log(err))
    }

    render() {
        const homes = this.state.loading ? "loading..." : this.state.data.map((item, idx) => <ProductsTile {...item} key={idx} />)
        return (
        <>
            {homes}
        </>
        )
    }
}

export default Products