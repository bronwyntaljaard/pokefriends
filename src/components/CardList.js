import React from "react";
import Card from "./Card";

const cardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("Oh no!");
  // }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default cardList;
