import React from "react";
import { createRoot  } from "react-dom/client"
import Menu from "./components/Menu";
import data from "./data/recipes.json"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Menu recipes={data} />);