import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      movie: {
        title:this.title,
        poster: '',
        genres: [],
        credits: [],
        cast: [],
        crew: []
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
            console.log(result)
            const movie = result;
            this.setState({movie})
          this.setState({
            isLoaded: true,
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
  componentDidMount(){
      this.getData();
  }
  render() {
    return (
        <div className="container">
            <div className="movieSite">
                <div className="movieSite__poster">
                    <h3>{this.state.movie.title}</h3>
                </div>
            </div>
        </div>
    )
  }
}

export default Movie;
