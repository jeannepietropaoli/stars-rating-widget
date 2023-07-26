import React from "react";
import StarBlock from "./StarBlock";

export default function RatingSection(props) {
    return (
        <div className="rating-section">
            <h2>{props.sectionName}</h2>
            <StarBlock />
        </div>
    )
}