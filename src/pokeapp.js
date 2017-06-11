import React, { Component } from 'react';
import PokemonList from './pokemonlist.js';
import './index.css';

class PokeApp extends Component {
  render() {
    return (
      <div className="pokeapp">
        <h1> The Kanto Pokedex!</h1>
        <PokemonList/>
      </div>
    );
  }
}

export default PokeApp;
