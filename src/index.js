import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import PokeApp from './pokeapp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<PokeApp />, document.getElementById('app'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
