import React from "react";
import "./StarBlock.css"

export default function StarBlock() {
    const delayInterval = 100
    const singleAnimationDuration = 600
    const fillColor = "yellow"
    const starPath = ("M 0.000 20.000 L 23.511 32.361 L 19.021 6.180 L 38.042 -12.361 L 11.756 -16.180 L 0.000 -40.000 L -11.756 -16.180 L -38.042 -12.361 L -19.021 6.180 L -23.511 32.361 L 0.000 20.000 ")

    const [stars, setStars] = React.useState([
        {index : 0, selected: false, delay : "0ms", animate : false},
        {index : 1, selected: false, delay : `${delayInterval * 1}ms`, animate : false},
        {index : 2, selected: false, delay : `${delayInterval * 2}ms`, animate : false},
        {index : 3, selected: false, delay : `${delayInterval * 3}ms`, animate : false},
        {index : 4, selected: false, delay : `${delayInterval * 4}ms`, animate : false}
    ])

    const [targetStarIndex, setTargetStarIndex] = React.useState(null)

    function calcAnimationTotalDuration() {
        return targetStarIndex * delayInterval + singleAnimationDuration
    }

    React.useEffect(() => {
        if(targetStarIndex !== null) {
            setStars(prevStars => {
                return prevStars.map(prevStar => {
                    return prevStar.index <= targetStarIndex
                        ? {...prevStar, selected : false, animate : true}
                        : {...prevStar, selected : false, animate : false}
                })
            })
    
            setTimeout(() => {
                setStars(prevStars => {
                    console.log('end')
                    return prevStars.map(prevStar => {
                        return prevStar.index <= targetStarIndex
                        ? {...prevStar, selected : true, animate : false}
                        : {...prevStar, selected : false, animate : false}
                })
                })
            }, calcAnimationTotalDuration())
        }
    }, [targetStarIndex])

    const starElements = stars.map(star => {
        return (
            <svg 
                style={{
                    "--fill-color" : fillColor,
                    "--delay" : star.delay,
                    "--animation-duration" : `${singleAnimationDuration}ms`}
                }
                className={`stars ${star.animate ? "animate" : ""}`}
                fill={star.selected ? fillColor : "transparent"}
                width="45"
                height="45"
                viewBox="-40 -40 80 80"
            >
                <path 
                    onClick={() => setTargetStarIndex(star.index)}  
                    d={starPath}
                />
            </svg>
        )
    })

    return (
        <div className="rating-block">
            {starElements}
        </div>
    )
}