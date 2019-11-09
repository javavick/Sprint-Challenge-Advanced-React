import React from "react";
import PlayerCard from "./PlayerCard.js";

const PlayerMap = ({ players }) => {
  return players.map((item) => {
    <PlayerCard
      name={item.name}
      country={item.country}
      searches={item.searches}
    />;
  });
};

export default PlayerMap;
