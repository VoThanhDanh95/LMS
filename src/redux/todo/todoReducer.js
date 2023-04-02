import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './todoConstant';


const initialState = {
    todos: [],
    filter: 'SHOW_ALL',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { content } = action.payload;
            const newTodo = {
                id: state.todos.length + 1,
                content,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        }
        case SET_FILTER: {
            const { filter } = action.payload;
            return {
                ...state,
                filter,
            };
        }
        default:
            return state;
    }
};

export default todoReducer;