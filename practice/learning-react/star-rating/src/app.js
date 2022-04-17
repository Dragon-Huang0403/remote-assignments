import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";

export default function App() {
  return (
    <React.Fragment>
      <AddColorForm />
      <ColorList />
    </React.Fragment>
  );
}
