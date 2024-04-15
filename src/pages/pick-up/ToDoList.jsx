import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    console.log(index)
    const newTodos = todos.filter((todo, i) => i !== index);
    console.log(todos)
    console.log(newTodos)
    setTodos(newTodos);
  };

  const handleDuplicateTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index + 1, 0, todos[index]); // Duplicate the todo at index+1 position
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDuplicateTodo(index)}>Duplicate - {index}</button>
            <button onClick={() => handleRemoveTodo(index)}>Remove - {index}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

