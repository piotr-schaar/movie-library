import React, { Component } from "react";
import Header from "../header/Header";
import MovieItem from "../movies/MoviesItem";
import axios from "axios";
class Genre extends Component {
  constructor(props) {
    super();
    this.state = {
      genre: "",
      movies: []
    };
  }
  getData() {
    const key = "bd5f28af222edabf18f21f9cf5683cca";
    let id = window.location.pathname.split("/").pop();
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}&sort_by=vote_average.desc&vote_count.gte=1000`;
    axios
      .get(url)
      .then(res => res.data.results)
      .then(result => {
        this.setState({
          movies: result
        });
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <ul>
          {this.state.movies.map((movie, index) => {
            return (
              <MovieItem
                index={index}
                key={index}
                movie={movie}
                movies={this.state.movies}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Genre;
