import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import LoginPage from './LoginPage'
import ProductList from './ProductList'
import CartPage from './CartPage';
import ProductDetails from './ProductDetails';

import SearchAppBar from './SearchAppBar'
import axios from "axios";

class App extends Component {
    state = {
        apiData: [],
    };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((data) => {
                this.setState({apiData: data.data});
            })
    }

    render() {
    return (
        <Router>
            <div>
                <SearchAppBar/>
                <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route exact path='/productList' render={(props) => <ProductList apiData={this.state.apiData} {...props} /> } />
                    <Route exact path='/cart' component={CartPage}/>
                    <Route exact path='/productDetail/:id' component={ProductDetails}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
