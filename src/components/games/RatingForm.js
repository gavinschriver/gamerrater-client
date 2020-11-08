import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"

export default (props) => {
    const {createRating } = useContext(GameContext)
    const [rating, setRating] = useState(0)
    const { gameId } = props
    const handleControlledInputChange = e => {
        const newRating = e.target.value
        setRating(newRating)
    }

    const handleSubmit = e => {
        const newRating = {
            rating: parseInt(rating),
            gameId: gameId
        }
        e.preventDefault()
        createRating(newRating)
    }

    return (
        <div>
            <input type="range" min="0" max="10" value={rating} onChange={handleControlledInputChange} />
            <button onClick={handleSubmit}>Add a rating</button>
        </div>
    )
}