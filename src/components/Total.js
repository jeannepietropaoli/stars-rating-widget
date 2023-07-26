import React from "react";

export default function Total(props) {
    const pointsTotal = props.rates.reduce((total, currentRate) => {
        return (total + currentRate)
    }, 0)
    const total = pointsTotal/ props.rates.length

    return (
        <div className="total">
            <h2>TOTAL</h2>
            <span>{total}</span>
        </div>
    )
}