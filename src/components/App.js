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
                console.log(this.state.apiData);
            })
    }

    render() {
    return (
        <Router>
            <div>
                <SearchAppBar/>
                <Link to='/login' className='item'>
                    Login
                </Link>
                <Link to='/productList' className='item'>
                    View Products
                </Link>
                <Link to='/cart' className='item'>
                    View Cart
                </Link>
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/productList' render={(props) => <ProductList apiData={this.state.apiData} {...props} /> } />
                    <Route exact path='/cart' component={CartPage}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
