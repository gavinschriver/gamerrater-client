import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getGames = () => {
    return fetch("http://localhost:8000/games", {
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setGames(res);
      });
  };

  const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((newGame) => {
        getGames();
        return newGame;
      });
  };

  const getReviewsByGameId = (gameId) => {
    return fetch(`http://localhost:8000/reviews?gameId=${gameId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setReviews);
  };

  const createReview = (newReview, gameId) => {
    return fetch(`http://localhost:8000/reviews`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((rev) => {
        getReviewsByGameId(gameId);
        return rev;
      });    
  };

  const createRating = (rating) => {
    return fetch(`http://localhost:8000/ratings`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rating)
    })
  }

  const createImage = (newImage, gameId) => {
    return fetch(`http://localhost:8000/images`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newImage)
    })
  }

  return (
    <GameContext.Provider
      value={{
        games,
        getGames,
        getSingleGame,
        createGame,
        getReviewsByGameId,
        createReview,
        createRating,
        reviews,
        createImage
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
