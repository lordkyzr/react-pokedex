import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
          <div className="pokemon-species-name">
            <Link to={{pathname: "pokemon/" + id}}>
              {pokemon.name}
            </Link>
         </div>
        </div>
      </div>
    );
  }

  showPokemon(){
    //alert();
  }

}

export default Pokemon;
