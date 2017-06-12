import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
//import Pokemon from './pokemon.js'
import './index.css';
//import axios from 'axios';

class PokemonDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokeid : this.props.match.params.pokeid,
      details : [],
      fetched : false,
      loading : false,
    }
  }
  componentWillMount(){
    this.setState({
      loading : true
    });

    fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.pokeid).then(res=>res.json())
    .then(response=>{
      console.log(response);
      this.setState({
        details : response,
        loading : true,
        fetched : true
      });
    });

    /*axios.get('http://pokeapi.co/api/v2/pokemon/' + this.state.pokeid)
    .then(function (response){
      this.setState({
        //details : response.data,
        loading : true,
        fetched : true
      })
    })
    .catch(function (error){
      console.log(error)
    });*/
  }

  getAPIData(){

  }

  render(){
    var id = this.props;
    console.log(id);
    const {pokeid, fetched, loading, details} = this.state;
    let content ;
    if(fetched){
      //content = <div className="pokemon-details"> {this.state.details}</div>
      content = <div className="pokemon-details">
        <img src={`../sprites/${pokeid}.png`} alt="" />
        <p>
          Name: {this.state.details.name}
          <br></br>
          Base Exp: {this.state.details.base_experience}
          <br></br>
          Height: {this.state.details.height}
          <br></br>
          Weight: {this.state.details.weight}
          <br></br>
          Type: {this.state.details.types[0].type.name}
          <br></br>
        </p>
      </div>
    }else if(loading && !fetched){
        content = <p> Loading ...</p>
    }
    else{
      content = <div/>
    }
    return (
      <div>{content}</div>
    )

    /*
    var id = this.props;
    console.log(id);
    return <div>
      <h3>
        PokemonDetails
        <br></br>
        {this.state.pokeid}
        <br></br>
        {this.state.details}
    </h3>
  </div>
  */
  }
}

export default PokemonDetails;
