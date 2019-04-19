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
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc&vote_count.gte=10000`;

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
      <div className="movies moviesRated">
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
