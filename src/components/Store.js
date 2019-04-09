import {createStore, combineReducers} from "redux";

const reducer = combineReducers({
    products: productReducer,
    selectedProduct: selectProductReducer,
    cart: cartReducer,
    user: userReducer
});

function productReducer(state = [], action) {
    if(action.type === 'SET_PRODUCTS') {
        return (
            action.productList
        );
    }
    else {
        return state;
    }
}

function selectProductReducer(state = {}, action) {
    if(action.type === 'SELECT_PRODUCT') {
        return (
            action.selectedItem
        );
    }
    else {
        return state;
    }
}

function cartReducer(state = [], action) {
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
    else {
        return state;
    }
}

function userReducer(state = [], action) {
    if(action.type === 'USER_SIGNIN') {
        return {
        }
    }
    else {
        return state;
    }
}

const store = createStore(reducer);

export default store;
