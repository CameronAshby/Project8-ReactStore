import {createStore} from "redux";
import axios from "axios";

function reducer(state, action) {
    if(action.type === 'CART_ADD') {
        return {
        }
    }
    else if(action.type === 'CART_REMOVE') {
        return {
        }
    }
    else if(action.type === 'CART_EDIT') {
        return {
        }
    }
    else if(action.type === 'USER_SIGNIN') {
        return {
        }
    }
    else if(action.type === 'SET_PRODUCTS') {
        return {
            products: action.productList
        }
    }
    else {
        return state;
    }
}

const initialState = { products: [] };

const store = createStore(reducer, initialState);

export default store;
