import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails: [],
      searchfield: "",
    };
  }

  getPokemonDetails() {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ pokemons: data.results }, () => {
          this.state.pokemons.map((pokemon) => {
            fetch(pokemon.url)
              .then((resp) => resp.json())
              .then((data) => {
                // const temp = this.state.pokemonDetails;
                // temp.push(data);
                // this.state.pokemonDetails.push(data);
                this.setState((prevState) => ({
                  pokemonDetails: [...prevState.pokemonDetails, data],
                }));
              });
          });
        });
      });
  }

  componentDidMount() {
    this.getPokemonDetails();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  getFilteredSortedList() {
    const filtered = this.state.pokemonDetails.filter((pokemon) => {
      if (
        pokemon.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      ) {
        return pokemon;
      }
    });
    return filtered.sort((a, b) => a.id - b.id);
  }

  render() {
    if (this.state.pokemons.length === 0) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1"> POKEDEX </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList pokemonList={this.getFilteredSortedList()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
