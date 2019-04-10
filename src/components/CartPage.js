import React, {Component} from 'react';
import store from './Store';
import Stars from '@material-ui/icons/Stars';
import Input from '@material-ui/core/Input';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';

import '../CSS/cartPage.css';
import Button from "@material-ui/core/Button";

class CartPage extends Component {
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
                            <Button variant="contained" size="small" color="primary">Remove</Button>
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
