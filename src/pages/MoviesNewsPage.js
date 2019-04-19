import React, { Component } from "react";
import axios from "axios";
import MoviesItem from "../components/MoviesItem/MoviesItem";
import { MovieList } from "../components/List/Lists";
class NewMovies extends Component {
    state = {
      error: null,
      isLoaded: true,
      movies: [],
    };

  getData() {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let todayMonth = todayDate.getMonth();
    let todayDay = todayDate.getDate();
    let today = todayYear + "-" + (todayMonth + 1) + "-" + todayDay;
    let monthAgo =
      (todayMonth === 0 ? todayYear - 1 : todayYear) +
      "-" +
      (todayMonth === 0 ? todayMonth + 12 : todayMonth) +
      "-" +
      todayDay;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${monthAgo}&primary_release_date.lte=${today}`;

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
      <div className="movies newMovies">
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

export default NewMovies;
