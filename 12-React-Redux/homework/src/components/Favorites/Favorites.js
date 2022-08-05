import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavorites
  };
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID)),
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(ConnectedList);
