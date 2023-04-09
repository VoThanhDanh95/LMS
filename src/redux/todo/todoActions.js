// actions.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_FILTER } from './todoConstant';

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        content,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter,
    },
});
