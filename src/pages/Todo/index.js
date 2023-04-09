// Todo.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { addTodo, deleteTodo } from '../redux/todo/todoActions';

function Todo({ todos, addTodo, deleteTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        const todo = {
            id: Math.random(),
            text: inputValue
        };
        console.log(todo)
        // addTodo(todo);
        setInputValue('');
    };

    const handleDeleteTodo = id => {
        // deleteTodo(id);
        console.log(id)
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
});

// const mapDispatchToProps = {
//     addTodo,
//     deleteTodo
// };

export default connect(mapStateToProps)(Todo);

// export default Todo;