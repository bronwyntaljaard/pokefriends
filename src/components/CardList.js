import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    const pokemonArr = this.props.pokemonList.map((onePokemon) => {
      return (
        <Card
          key={onePokemon.id}
          name={onePokemon.name}
          id={onePokemon.id}
          height={onePokemon.height}
          weight={onePokemon.weight}
        />
      );
    });
    return <div>{pokemonArr}</div>;
  }
}

export default CardList;
