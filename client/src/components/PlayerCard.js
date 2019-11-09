import React from "react";

const PlayerCard = ({ name, country, searches }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
  );
};

export default PlayerCard;
