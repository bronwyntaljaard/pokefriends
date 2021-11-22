import React from "react";

const Card = function ({ name, id, height, weight }) {
  let newN = name.toUpperCase();
  let newH = (height * 0.1).toFixed(2);
  let newW = (weight * 0.1).toFixed(2);

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon"
        width="200px"
        height="200px"
      />
      <div>
        <h2> {newN} </h2>
        <p> Id: {id}</p>
        <p> Height (metre): {newH} </p>
        <p> Weight (kg): {newW}</p>
      </div>
    </div>
  );
};

export default Card;
