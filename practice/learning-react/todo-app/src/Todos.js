import "./Todos.css";
import Title from "./components/Title";
import AddForm from "./components/Addform";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { useState } from "react";
import { v4 } from "uuid";

export default function Todos() {
  const [showMode, setShowMode] = useState("All");
  const [todos, setTodos] = useState([]);
  const leftItems = () => {
    if (!todos.length) return 0;
    return todos.reduce(
      (value, todo) => (todo.completed ? value : value + 1),
      0
    );
  };
  const showedTodos = () => {
    if (showMode === "All") {
      return todos;
    } else if (showMode === "Active") {
      return todos.filter((todo) => todo.completed === false);
    }
    return todos.filter((todo) => todo.completed === true);
  };

  const addTodo = (text) =>
    setTodos([
      ...todos,
      {
        id: v4(),
        text,
        completed: false
      }
    ]);

  const toggleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const modifyText = (id, text) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));

  const clearComplete = () =>
    setTodos(todos.filter((todo) => todo.completed === false));

  return (
    <div>
      <Title className="title">Todos</Title>
      <main className="main">
        <section className="container-new-todo">
          <button className="toggle-all"></button>
          <AddForm addTodo={addTodo} />
        </section>
        <TodoList
          todos={showedTodos()}
          toggleComplete={toggleComplete}
          delTodo={delTodo}
          modifyText={modifyText}
        />
        <TodoFooter
          leftItems={leftItems()}
          clearComplete={clearComplete}
          showMode={showMode}
          setShowMode={setShowMode}
        />
      </main>
      <footer className="footer">
        <p>Double-click to edit a todo</p>
        <p>Created by Dragon Huang</p>
      </footer>
    </div>
  );
}
