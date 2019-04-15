import React, {Component} from 'react';
import store from './Store';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';
import Snackbar from './SnackBar';
import CartTotalBar from './CartTotalBar';

import '../CSS/cartPage.css';

class CartPage extends Component {

    handleRemove(item) {
        store.dispatch({
            type: 'CART_REMOVE',
            item: item
        })
    }

    handleEdit(direction, item) {
        store.dispatch({
            type: 'CART_EDIT',
            item: item,
            direction: direction
        });
        store.dispatch({
            type: 'CART_TOTAL'
        })
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
                                <UpArrow onClick={() => this.handleEdit('up', item)}/>
                                <div className='cartInput'>{item.quantity}</div>
                                <DownArrow onClick={() => this.handleEdit('down', item)}/>
                            </div>
                            <span onClick={() => this.handleRemove(item)}><Snackbar type='REMOVE'/></span>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className='pageContainer'>
                <CartTotalBar/>
                <div>{itemList}</div>
            </div>
        );
    }
}

export default CartPage;
