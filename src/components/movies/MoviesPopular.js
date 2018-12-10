import React, { Component } from "react";
import MoviesItem from "./MoviesItem";
import Header from "../header/Header";
import axios from "axios";
import Layout from "../../layout/Layout";
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
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`;

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
      <Layout>
        <div className="container">
          <Header />
          <div className="movies moviesPopular">
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
        </div>
      </Layout>
    );
  }
}

export default MoviesRated;
