import React, { Component } from "react";
import MoviesItem from "../components/movies/MoviesItem";
import Header from "../components/header/Header";
import axios from "axios";
import Layout from "../layout/Layout";
import {ContainWrapper} from '../layout/wrappers';
import {MovieList} from "../components/lists/lists";
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
        <ContainWrapper>
          <Header />
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
        </ContainWrapper>
      </Layout>
    );
  }
}

export default MoviesRated;