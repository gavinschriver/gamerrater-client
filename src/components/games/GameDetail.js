import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider";
import ReviewList from "./ReviewList";

export default (props) => {
  const { getSingleGame } = useContext(GameContext);
  const [game, setGame] = useState({ categories: [] });

  useEffect(() => {
    const gameId = parseInt(props.match.params.gameId);
    getSingleGame(gameId).then(setGame);
  }, []);

  return (
    <>
      <h3>ALL ABOUT THIS GAME</h3>
      <div>Title: {game.title}</div>
      <div>Show me that id: {game.id}</div>
      <div>Time to Play: {game.time_to_play}</div>
      <div>Year Released: {game.year_realeased}</div>
      <div>Designer: {game.designer}</div>
      <div>Number of players: {game.number_of_players}</div>
      <div>Age recommendation: {game.age_recommendation}</div>
      <div>
        <h3> Categories:</h3>
        {game.categories.map((c) => {
          return <div>{c.label}</div>;
        })}
        <ReviewList gameId={game.id} />
      </div>
    </>
  );
};
