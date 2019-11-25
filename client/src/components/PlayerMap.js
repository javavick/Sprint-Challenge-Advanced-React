import React from "react";
import PlayerCard from "./PlayerCard.js";

const PlayerMap = ({ players }) => {
  return (
    <div data-testid="player-map">
      {players.map((item) => {
        return (
          <PlayerCard
            key={item.id}
            name={item.name}
            country={item.country}
            searches={item.searches}
          />
        );
      })}
    </div>
  );
};

export default PlayerMap;
