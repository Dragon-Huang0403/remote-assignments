import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f, ...props }) => (
    <FaStar color={selected ? "red" : "grey"} {...props}/>
)

const createArray = length => [...Array(length)];

export default function StarRating({totalStars = 5, selectedStars = 0, onRate = f => f}) {
    return (
        <React.Fragment>
            {createArray(totalStars).map((n, i) => (
                <Star 
                key={i} 
                selected={selectedStars > i}
                onClick={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </React.Fragment> 
    );
}