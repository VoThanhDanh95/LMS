import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
    const todoItems = todos.map(todo => (
        <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    ));

    return (
        <div>
            <h2>Todo List</h2>
            <ul>{todoItems}</ul>
        </div>
    );
};

export default TodoList;