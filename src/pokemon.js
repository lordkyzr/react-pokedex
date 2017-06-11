import React, { Component } from 'react';
import './index.css';

class Pokemon extends Component {
  render() {
    const {pokemon,id} = this.props;
    return (
      <div className="pokemon-species">
        <div className="pokemon-species-container" onClick={this.showPokemon}>
          <div className="pokemon-species-sprite">
            <img src={`./sprites/${id}.png`} alt="" />
          </div>
          <div className="pokemon-species-name"> {pokemon.name} </div>
        </div>
      </div>
    );
  }

  showPokemon(){
    alert("It worked");
  }

}

export default Pokemon;
