import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            task: todo
        });
        setTodo('');
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
