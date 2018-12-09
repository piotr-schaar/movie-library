import React, { Component } from "react";
import axios from "axios";
import Header from "../header/Header";
import { Link } from "react-router-dom";

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      genres: []
    };
  }
  getData() {
    const key = "bd5f28af222edabf18f21f9cf5683cca";
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;

    axios
      .get(url)
      .then(res => res.data.genres)
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            genres: result
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
      <div className="container">
        <Header />
        <div className="genres">
          <ul className="genres__list">
            {this.state.genres.map((genre, index) => {
              let genreUrl = this.state.genres[index].name.toLowerCase();
              const newTo = {
                pathname: `/genre/${genreUrl}`,
                param: this.state.genres[index].id
              };
              return (
                <Link to={newTo} key={index}>
                  <li className="genres__item">
                    <p>{this.state.genres[index].name}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Genres;
