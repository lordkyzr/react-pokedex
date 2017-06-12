import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import PokeApp from './pokeapp';
import NoRoute from './noroute';
import PokemonDetails from './pokemondetails';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={PokeApp}/>
      <Route path="/pokemon/:pokeid" component={PokemonDetails}/>
    </div>
  </BrowserRouter>
)

//ReactDOM.render(<PokeApp />, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
