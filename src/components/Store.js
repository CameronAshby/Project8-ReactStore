import {createStore} from "redux";

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
    else {
        return state;
    }
}

const store = createStore(reducer);

export default store;
