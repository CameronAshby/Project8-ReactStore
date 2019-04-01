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

class App extends Component {
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
                    <Route exact path='/productList' component={ProductList}/>
                    <Route exact path='/cart' component={CartPage}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
