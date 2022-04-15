import React from "react";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import ControlledForm2 from "./ControlledForm2";

export default function App() {
    return(
        <>
            <UncontrolledForm />
            <ControlledForm />
            <ControlledForm2 />
        </>
    );
}