import React from "react";
import { Route } from "react-router-dom";
import GameList from "./games/GameList";
import { GameProvider } from "./games/GameProvider";
import GameDetail from "./games/GameDetail";
import GameForm from "./games/GameForm";
import { CategoryProvider } from "./categories/CategoryProvider";

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
          <Route
            exact
            path="/games/:gameId(\d+)"
            render={(props) => <GameDetail {...props} />}
          />
        </GameProvider>

        <GameProvider>
          <CategoryProvider>
            <Route exact path="/games/new" render={(props) => <GameForm {...props} />} />
          </CategoryProvider>
        </GameProvider>
      </main>
    </>
  );
};
