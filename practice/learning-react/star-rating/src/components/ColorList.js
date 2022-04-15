import React from "react";
import Color from "./Color";
import { useColor } from "./color-hook";


export default function ColorList() {
    const { colors } = useColor();
    
    if (!colors.length)
        return <div>No Clors Listed</div>;
    return (
        <div className="color-list">
            {
                colors.map(color =>
                    <Color key={color.id} {...color} />
                )
            }
        </div>
    )
}