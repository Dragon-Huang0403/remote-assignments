import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete, delTodo }) {
  return (
    <section className="container-todos">
      <ul className="todos">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleComplete={() => toggleComplete(todo.id)}
            delTodo={() => delTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}
