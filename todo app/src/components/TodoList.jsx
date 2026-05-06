import React from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  );
};