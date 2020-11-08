import React, {useContext, useEffect, useState} from "react"
import { GameContext } from "./GameProvider"

export default (props) => {
    const {createReview} = useContext(GameContext)
    const {gameId} = props
    const [review, setReview] = useState({})
    const handleControlledInputChnage = e => {
        const newReview = Object.assign({}, review)
        newReview[e.target.name] = e.target.value
        setReview(newReview)
    }

    const handleSubmitButtonPress = e => {
        e.preventDefault()
        const newReview = {
            gameId: gameId,
            text: review.text
        }
        createReview(newReview, gameId)
    }

    return (
        <form>
            <fieldset>
                <label htmlFor="text">Review:</label>
                <input type="textarea" name="text" onChange={handleControlledInputChnage}></input>
                <button type="submit" onClick={handleSubmitButtonPress}>ADD REVIEW</button>
            </fieldset>
        </form>
    )
}