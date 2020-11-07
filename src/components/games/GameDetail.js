import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider";

export default (props) => {
    const { getSingleGame } = useContext(GameContext)
    const [game, setGame] = useState({})

    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getSingleGame(gameId)
            .then(setGame)
    }, [])


    return (
        <>
        <div>ALL ABOUT THIS GAME</div>
            <div>{game.title}</div>
            </>
    )
}