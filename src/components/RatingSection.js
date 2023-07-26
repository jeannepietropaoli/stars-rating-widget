import React from "react";
import StarBlock from "./StarBlock";
import "../styles/RatingSection.css"

export default function RatingSection(props) {
    return (
        <div className="rating-section">
            <h2>{props.sectionName}</h2>
            <StarBlock sectionName={props.sectionName} rateSection={props.rateSection} />
        </div>
    )
}