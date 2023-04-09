import { createStore } from 'redux';

const initialState = {
    loggedIn: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true
            };
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);