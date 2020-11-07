import React from "react";
import { Route } from "react-router-dom";
import GameList from "./games/GameList";
import { GameProvider } from "./games/GameProvider";
import GameDetail from "./games/GameDetail"

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          backgroundColor: "lightgoldenrodyellow",
        }}
      >
        <GameProvider>
          <Route exact path="/games">
            <GameList />
          </Route>
          <Route exact path="/games/:gameId(\d+)" render={props => <GameDetail {...props}/>}/>
        </GameProvider>
      </main>
    </>
  );
};
