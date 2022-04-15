import React from 'react'
import { createRoot } from 'react-dom/client'
import ColorProvider from "./components/color-hook"

import App from './app';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);