import "./Todos.css";

export default function Todos() {
  return (
    <div>
      <header>
        <h1 className="title">Todos</h1>
      </header>
      <main className="main">
        <header className="container-new-todo">
          <button className="toggle-all"></button>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
          ></input>
        </header>
        <section className="container-todos">
          <ul className="todos">
            <li>
              <input className="checkbox-round" type="checkbox" />
              <label className="todo-content">item 1</label>
              <button className="del-todo"></button>
            </li>
            <li>
              <input className="checkbox-round" type="checkbox" />
              <label className="todo-content">item 2</label>
              <button className="del-todo"></button>
            </li>
          </ul>
        </section>
        <footer className="todos-info">
          <p className="todos-left">2 items left</p>
          <ul className="todos-filter">
            <li className="filter-selected">All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </footer>
      </main>
      <footer className="footer">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  );
}
