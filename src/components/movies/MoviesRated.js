import React, { Component } from "react";
import MoviesItem from "./MoviesItem";
class MoviesRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      movies: []
    };
  }
  getData() {
    const key = "bd5f28af222edabf18f21f9cf5683cca";
    let url = `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&language=en-US&certification_country=US&certification=R&sort_by=vote_average.desc`;
  }
  render() {
    return (
      <div className="movies newMovies">
        <ul className="movies__list">
          {this.state.movies.map((movie, index) => {
            return (
              <MoviesItem
                key={index}
                movie={movie}
                index={index}
                movies={this.state.movies}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesRated;
