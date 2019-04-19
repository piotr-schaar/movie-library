import React, { Component } from "react";
import MovieItem from "../MoviesItem/MoviesItem";
import axios from "axios";
import Layout from "../../layout/Layout";
class Genre extends Component {
  constructor(props) {
    super();
    this.state = {
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
      <Layout>
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
      </Layout>
    );
  }
}

export default Genre;
