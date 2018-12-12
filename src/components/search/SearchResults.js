import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MovieList } from "../lists/lists";
import MoviesItem from "../movies/MoviesItem";

class SearchResults extends Component {
  render() {
    return (
      <MovieList>
        {this.props.results.map((movie, index) => {
          return (
            <Link to={`/movie/${this.props.results[index].id}`}>
              <MoviesItem
                movie={movie}
                key={index}
                index={index}
                movies={this.props.results}
              />
            </Link>
          );
        })}
      </MovieList>
    );
  }
}

export default SearchResults;
