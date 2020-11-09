import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default (props) => {
  const { getSingleGame, createRating, createImage } = useContext(GameContext);
  const [game, setGame] = useState({ categories: [], pics: [] });
  const [rating, setRating] = useState(0);

  const handleControlledInputChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
  };

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => callback(reader.result));
  };

  const handleImageSubmit = (event) => {
    event.preventDefault();
    getBase64(event.target.game_image.files[0], (imageBase64) => {
      console.log("Base64 of file is", imageBase64);
      const newImage = {
        base64ImageString: imageBase64,
        gameId: game.id,
      };
      createImage(newImage, game.id).then(() => {
        getSingleGame(game.id).then(setGame)
      })
    });
  };

  // for adding a rating
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
      <section className="game">
        <h3>ALL ABOUT THIS GAME</h3>
        <div>Title: {game.title}</div>
        <div>Time to Play: {game.time_to_play}</div>
        <div>Year Released: {game.year_realeased}</div>
        <div>Designer: {game.designer}</div>
        <div>Number of players: {game.number_of_players}</div>
        <div>Age recommendation: {game.age_recommendation}</div>
        <div className="game__categories">
          <h3> Categories:</h3>
          {game.categories.map((c) => {
            return <div>{c.label}</div>;
          })}
        </div>
        <div className="game_pics">
          <h3>Pics or it didn't...ya know...</h3>
          {game.pics.map((p) => {
            return <img src={p.image} />
          })}
        </div>
      </section>

      <form onSubmit={handleImageSubmit}>
        <input type="file" id="game_image" />
        <button type="submit">Upload</button>
      </form>

      {!game.rated && (
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
      )}
      <div>Average rating for this game: {game.average_rating}</div>
      <ReviewForm gameId={game.id} />
      <ReviewList gameId={game.id} />
    </>
  );
};
