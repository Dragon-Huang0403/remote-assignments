import React, { useRef } from "react";

export default function UncontrolledForm({ OnNewColor = f => f}) {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        OnNewColor(title, color);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={hexColor} type="color" required />
            <button>ADD</button>
        </form>
    );
}