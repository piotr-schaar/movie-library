import React, { Component } from "react";
import MoviesItem from "../components/MoviesItem/MoviesItem";
import axios from "axios";
import { MovieList } from "../components/List/Lists";


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
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;

    axios
      .get(url)
      .then(res => res.data.results)
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movies: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="movies moviesPopular">
        <MovieList>
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
        </MovieList>
      </div>
    );
  }
}

export default MoviesRated;
