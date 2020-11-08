import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GameContext} from "./GameProvider"

export default (props) => {
  const { games, getGames } = useContext(GameContext);
  useEffect(() => {
      getGames();
  }, []);

  return (
    <section>
      <h2>WILL BE GAMES HERE</h2>
      <div>
        {
          games.map(g => {
            return <div key={g.id}><Link to={`/games/${g.id}`}>{g.title}</Link></div>
          })
        }
      </div>
    </section>
  );
};
