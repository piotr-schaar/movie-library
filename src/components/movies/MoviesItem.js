import React, { Component } from 'react';

class MoviesItem extends Component {
    render() {
        let index = this.props.index;
        let movies = this.props.movies;
        return (
            <li key={index} className="movies__item">
            <img
              src={
               movies[index].poster_path === null
                  ? "http://via.placeholder.com/300x450"
                  : `https://image.tmdb.org/t/p/w300/${movies[index].poster_path}`
              }
              alt={``}
            />
          </li>
        );
    }
}

export default MoviesItem;