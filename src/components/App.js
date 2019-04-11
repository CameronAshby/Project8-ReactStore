import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import LoginPage from './LoginPage'
import ProductList from './ProductList'
import CartPage from './CartPage';
import ProductDetails from './ProductDetails';
import HeaderAppBar from './HeaderAppBar';

import products from '../API/products';
import store from './Store';
import FooterAppBar from './FooterAppBar';

import '../CSS/app.css';

class App extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        this.getProducts();
    }

    getProducts = async () => {
        const response = await products.get('/products');
        store.dispatch({
            type: 'SET_PRODUCTS',
            productList: response.data
        });
    };

    render() {
    return (
        <Router>
            <div className='appContainer'>
                <HeaderAppBar />
                <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route exact path='/productList' render={(props) => <ProductList apiData={store.getState().products} {...props} /> } />
                    <Route exact path='/cart' component={CartPage}/>
                    <Route exact path='/productDetail/:id' component={ProductDetails}/>
                </Switch>
                <FooterAppBar/>
            </div>
        </Router>
    );
  }
}

export default App;
