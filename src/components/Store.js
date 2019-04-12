import {createStore, combineReducers} from "redux";

const reducer = combineReducers({
    products: productReducer,
    selectedProduct: selectProductReducer,
    cart: cartReducer,
    user: userReducer
});

function findItemIndex(items, action) {
    return items.findIndex(
        (t) => t.id === action.item.id
    );
}

function productReducer(state = [], action) {
    if(action.type === 'SET_PRODUCTS') {
        return (action.productList);
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
    let newCart;
    let oldCart = state;
    if(action.type === 'CART_ADD') {
        let checkIndex = findItemIndex(state,action);
        if(checkIndex === -1) {
            let cartItem = Object.assign(action.item, {quantity: 1});
            newCart = [...state, cartItem];
        }
        else {
            oldCart[checkIndex].quantity++;
            return oldCart;
        }
        return (newCart);
    }
    else if(action.type === 'CART_REMOVE') {
        let newCart = state.filter(item => item.id !== action.item.id);
        return (newCart);
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
            username: action.username,
            password: action.password
        }
    }
    else {
        return state;
    }
}

const store = createStore(reducer);

export default store;
