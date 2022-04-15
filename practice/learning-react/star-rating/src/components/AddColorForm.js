import React from "react";
import useInput from "./useInput";
import { useColor } from "./color-hook";

export default function AddColorForm({ onNewColor }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const { addColor } = useColor();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text" 
                placeholder="color title..." 
                required />
            <input 
                {...colorProps}
                type="color"
                required />
            <button>ADD</button>
        </form>
    );
}