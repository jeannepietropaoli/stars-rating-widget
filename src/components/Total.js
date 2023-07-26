import React from "react";
import StarBlock from "./StarBlock";
import "../styles/Total.css"

export default function Total(props) {
    const starPath = ("M 0.000 20.000 L 23.511 32.361 L 19.021 6.180 L 38.042 -12.361 L 11.756 -16.180 L 0.000 -40.000 L -11.756 -16.180 L -38.042 -12.361 L -19.021 6.180 L -23.511 32.361 L 0.000 20.000 ")
    const pointsTotal = props.rates.reduce((total, currentRate) => {
        return (total + currentRate)
    }, 0)
    const total = pointsTotal/ props.rates.length
    const emptyStarElements = Array(5).fill(
        <svg 
                className={`total-stars`}
                width="45"
                height="45"
                viewBox="-45 -45 90 90"
        >
                <path
                    d={starPath}
                />
            </svg>
    )

    return (
        <div className="total">
            <h2>TOTAL</h2>
            <span>{total}</span>
            <div style={{"--final-rate": total}} className="total-stars-container">
                {emptyStarElements}
            </div>
        </div>
    )
}