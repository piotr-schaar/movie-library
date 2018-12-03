import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesItem extends Component {
  render() {
    let index = this.props.index;
    let movies = this.props.movies;
    return (
      <Link
        to={`/movie/${movies[index].id}`}
        key={index} 
      >
        <li className="movies__item">
          <img
            src={
              movies[index].poster_path === null
                ? "http://via.placeholder.com/300x450"
                : `https://image.tmdb.org/t/p/w300/${movies[index].poster_path}`
            }
            alt={``}
          />
          <div className="movies__info">
            <h3>{movies[index].title}</h3>
            <p>{movies[index].release_date}</p>
            <p>{movies[index].overview}</p>
          </div>
        </li>
      </Link>
    );
  }
}

export default MoviesItem;
