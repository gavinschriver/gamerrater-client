import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider";
import RatingForm from "./RatingForm";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default (props) => {
  const { getSingleGame, createRating } = useContext(GameContext);
  const [game, setGame] = useState({ categories: [] });
  const [rating, setRating] = useState(0);

  const handleControlledInputChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    const gameId = parseInt(props.match.params.gameId);
    const newRating = {
      rating: parseInt(rating),
      gameId: gameId,
    };
    e.preventDefault();
    createRating(newRating);
    getSingleGame(gameId).then(setGame);
  };

  useEffect(() => {
    const gameId = parseInt(props.match.params.gameId);
    getSingleGame(gameId).then(setGame);
  }, []);

  return (
    <>
      <h3>ALL ABOUT THIS GAME</h3>
      <div>Title: {game.title}</div>
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
        { !game.rated &&
          <div>
            <input
              type="range"
              min="0"
              max="10"
              value={rating}
              onChange={handleControlledInputChange}
            />
            <button onClick={handleSubmit}>Add a rating</button>
          </div>
        }
        <div>Average rating for this game: {game.average_rating}</div>
        <ReviewForm gameId={game.id} />
        <ReviewList gameId={game.id} />
      </div>
    </>
  );
};
