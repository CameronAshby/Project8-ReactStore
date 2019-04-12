import React, {Component} from 'react';
import store from './Store';
import Input from '@material-ui/core/Input';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';
import Snackbar from './SnackBar';

import '../CSS/cartPage.css';

class CartPage extends Component {

    handleRemove(item) {
        store.dispatch({
            type: 'CART_REMOVE',
            item: item
        })
    }

    handleEdit() {

    }

    render() {
        let items = store.getState().cart ? store.getState().cart : [];
        let itemList = items.map((item, index) => {
            return (
                <div className='itemContainer'
                     key={index}
                >
                    <div className='cartItem'>
                        <div className='image'>
                            <img src={item.img} alt=''/>
                        </div>
                        <div className='itemInfo'>
                            <h3>{item.title}</h3>
                            <div className='detailContainer'>
                                <div>${item.price}</div>
                            </div>
                            <div className='inputContainer'>
                                <UpArrow/>
                                <Input className='cartInput' value={item.quantity} type='number'/>
                                <DownArrow/>
                            </div>
                            <span onClick={() => this.handleRemove(item)}><Snackbar type='REMOVE'/></span>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div>CheckoutBar</div>
                <div>{itemList}</div>
            </div>
        );
    }
}

export default CartPage;
