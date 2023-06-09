import React, { useState } from 'react';
import './css.css';
// eslint-disable-next-line
import {someFunction} from './jabascript.js';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">’Ç‰Á</button>
      </form>
    </div>
  );
}

export default TodoList;
