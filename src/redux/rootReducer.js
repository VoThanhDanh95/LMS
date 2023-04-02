import { combineReducers  } from 'redux';
import todoReducer from './todo/todoReducer';


const rootReducer = combineReducers ({
    todoReducer,
})

export default rootReducer