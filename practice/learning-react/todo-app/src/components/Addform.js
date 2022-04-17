import useInput from "../hooks/useInput";

export default function AddForm({ addTodo }) {
  const [inputProps, resetInput] = useInput();

  const submit = (e) => {
    e.preventDefault();
    addTodo(inputProps.value);
    resetInput();
  };

  return (
    <form className="new-todo__form" onSubmit={submit}>
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        required
        {...inputProps}
      ></input>
    </form>
  );
}
