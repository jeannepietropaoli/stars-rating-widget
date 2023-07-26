import React from "react";
import "../styles/StarBlock.css"

export default function StarBlock() {
    const delayInterval = 100
    const singleAnimationDuration = 600
    const defaultFillColor = "#edebeb"
    const fillColor = "yellow"
    const starPath = ("M 0.000 20.000 L 23.511 32.361 L 19.021 6.180 L 38.042 -12.361 L 11.756 -16.180 L 0.000 -40.000 L -11.756 -16.180 L -38.042 -12.361 L -19.021 6.180 L -23.511 32.361 L 0.000 20.000 ")

    const [stars, setStars] = React.useState([
        {index : 0, selected: false, delay : "0ms", animate : false, hovered : false},
        {index : 1, selected: false, delay : `${delayInterval * 1}ms`, animate : false, hovered : false},
        {index : 2, selected: false, delay : `${delayInterval * 2}ms`, animate : false, hovered : false},
        {index : 3, selected: false, delay : `${delayInterval * 3}ms`, animate : false, hovered : false},
        {index : 4, selected: false, delay : `${delayInterval * 4}ms`, animate : false, hovered : false}
    ])

    const [targetStarIndex, setTargetStarIndex] = React.useState(null)
    const [hoverTargetStarIndex, setHoverTargetStarIndex] = React.useState(null)

    function calcAnimationTotalDuration() {
        return targetStarIndex * delayInterval + singleAnimationDuration
    }

    React.useEffect(() => {
        if(targetStarIndex !== null) {
            setStars(prevStars => {
                return prevStars.map(prevStar => {
                    return prevStar.index <= targetStarIndex
                        ? {...prevStar, selected : false, animate : true, hovered : false}
                        : {...prevStar, selected : false, animate : false, hovered : false}
                })
            })
    
            setTimeout(() => {
                setStars(prevStars => {
                    return prevStars.map(prevStar => {
                        return prevStar.index <= targetStarIndex
                        ? {...prevStar, selected : true, animate : false, hovered : false}
                        : {...prevStar, selected : false, animate : false, hovered : false}
                })
                })
            }, calcAnimationTotalDuration())
        }
    }, [targetStarIndex])

    React.useEffect(() => {
        if(hoverTargetStarIndex !== null) {
            setStars(prevStars => {
                return prevStars.map(prevStar => {
                    return prevStar.index <= hoverTargetStarIndex
                        ? {...prevStar, hovered : true}
                        : {...prevStar, hovered : false}
                })
            })
        }
        else {
            setStars(prevStars => {
                return prevStars.map(prevStar => {
                    return {...prevStar, hovered : false}
                })
            })
        }
    }, [hoverTargetStarIndex])

    const starElements = stars.map(star => {
        return (
            <svg 
                onMouseEnter={() => setHoverTargetStarIndex(star.index)}
                onMouseLeave={() => setHoverTargetStarIndex(null)}
                onClick={() => setTargetStarIndex(star.index)}  
                style={{
                    "--fill-color" : fillColor,
                    "--delay" : star.delay,
                    "--animation-duration" : `${singleAnimationDuration}ms`}
                }
                className={`stars ${star.animate ? "animate" : ""} ${star.hovered ? "hovered" : ""}`}
                fill={star.selected ? fillColor : defaultFillColor}
                width="45"
                height="45"
                viewBox="-45 -45 90 90"
            >
                <path
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