import { useState } from "react";

export default function Todo({ text, completed, toggleComplete, delTodo }) {
  return (
    <li>
      <input
        className="checkbox-round"
        type="checkbox"
        checked={completed}
        onClick={toggleComplete}
      />
      <label className={completed ? "todo-content completed" : "todo-content"}>
        {text}
      </label>
      <button className="del-todo" onClick={delTodo}></button>
    </li>
  );
}
