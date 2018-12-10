import React, { Component } from "react";
import axios from "axios";
import Header from "../header/Header";
import MovieCast from "./MovieCast";
import SearchForm from "../search/SearchForm";
import Layout from "../../layout/Layout";
import { ContainWrapper } from "../../layout/wrappers";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      movie: {
        title: this.title,
        genres: [],
        credits: {
          cast: []
        }
      }
    };
  }
  getData() {
    const key = "bd5f28af222edabf18f21f9cf5683cca";
    let id = window.location.pathname.split("/").pop();
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`;

    axios
      .get(url)
      .then(res => res.data)
      .then(
        result => {
          const movie = result;
          this.setState({ movie });
          this.setState({
            isLoaded: true
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
  com;
  componentDidMount() {
    this.getData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }
  render() {
    return (
      <>
        <Layout>
          <Header />
          <ContainWrapper>
            <div className="poster">
              <img
                src={
                  this.state.movie.poster_path === null
                    ? "http://via.placeholder.com/300x450"
                    : `https://image.tmdb.org/t/p/w300${
                        this.state.movie.poster_path
                      }`
                }
                alt={`${this.state.movie.title} poster`}
                className="movie_poster"
              />
            </div>
            <h2 className="movieSite__title">{this.state.movie.title}</h2>
            <ul>
              <li>Rating: {this.state.movie.vote_average}</li>
              <li>Vote Count: {this.state.movie.vote_count}</li>
              <li>
                Genres:
                {this.state.movie.genres.map((element, index) => {
                  if (index < this.state.movie.genres.length - 1) {
                    return this.state.movie.genres[index].name + ", ";
                  } else {
                    return this.state.movie.genres[index].name;
                  }
                })}
              </li>
            </ul>
            <p>{this.state.movie.overview}</p>

            <MovieCast cast={this.state.movie.credits.cast} />
          </ContainWrapper>
        </Layout>
      </>
    );
  }
}

export default Movie;
