import React from 'react';
import store from './Store';
import Button from '@material-ui/core/Button';

import '../CSS/cartTotalBar.css';

class CartTotalBar extends React.Component {
    total = 0;

    handleCheckout() {
        store.dispatch({
            type: 'CART_CLEAR'
        })
    }

    render() {
        let items = store.getState().cart ? store.getState().cart : [];
        this.total = 0;
        items.forEach((item, index) => {
            this.total += (item.quantity * item.price);
        });

        return (
            <div className='totalBar'>
                <h3>Checkout</h3>
                <div>${this.total.toFixed(2)}</div>
                <Button onClick={() => this.handleCheckout()} variant="contained" size="small" color="primary">Checkout</Button>
            </div>)
    }
}

export default CartTotalBar;
