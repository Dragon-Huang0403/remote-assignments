export default function TodoFooter({
  leftItems,
  clearComplete,
  showMode,
  setShowMode
}) {
  const showModes = ["All", "Active", "Completed"];

  return (
    <footer className="todos-info">
      <p className="todos-left">{leftItems} items left</p>
      <ul className="todos-filter">
        {showModes.map((mode) => (
          <li
            className={showMode === mode ? "filter-selected" : ""}
            onClick={() => setShowMode(mode)}
          >
            {mode}
          </li>
        ))}
      </ul>
      <button className="btn-clear-completed" onClick={clearComplete}>
        Clear Completed
      </button>
    </footer>
  );
}
