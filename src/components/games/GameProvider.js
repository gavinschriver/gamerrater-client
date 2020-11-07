import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);

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
        setGames(res.results);
      });
  };

  const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json"
      },
    }).then(res => {
      return res.json()
    })
  }

  return (
    <GameContext.Provider value={{ games, getGames, getSingleGame }}>
      {props.children}
    </GameContext.Provider>
  );
};
