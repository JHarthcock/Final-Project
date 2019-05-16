import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductSingle from "./components/ProductSingle"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductSingle} />
            <Route path="/products" component={Products} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
