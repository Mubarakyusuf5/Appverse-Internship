import React, { useState } from "react";
import {TodoList} from "./components/TodoList";
import "./App.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <TodoList todos={todos} />
    </div>
  );
};

