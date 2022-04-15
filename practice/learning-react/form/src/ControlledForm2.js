import React, { useState } from "react";
import useInput from "./useInput"

export default function ControlledForm({ OnNewColor = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        OnNewColor(titleProps.value, colorProps.value);
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