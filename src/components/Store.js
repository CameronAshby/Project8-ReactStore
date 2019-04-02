import {createStore} from "redux";

function reducer(state, action) {
    if(action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message)
        }
    }
    else if(action.type === 'DELETE_MESSAGE') {
        return {
            messages: [
                ...state.messages.slice(0, action.index),
                ...state.messages.slice(action.index + 1, state.messages.length
                ),
            ]
        }
    }
    else {
        return state;
    }
}

const store = createStore(reducer);

export default store;
