import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider"

export default props => {
    const {gameId} = props
    const { getReviewsByGameId, reviews } = useContext(GameContext)
    
    useEffect(
        () => {
        if (gameId)
        getReviewsByGameId(props.gameId)
    }, [gameId])

    return (
        <section className="reviews">
            {reviews.map(r => {
                return <div>{r.text} @ {new Date(r.timestamp).toLocaleDateString("en-US")}</div>
            })}
        </section>
    )
}