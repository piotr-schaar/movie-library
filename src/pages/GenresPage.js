import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GenresList = styled.ul `
  display:flex;
  flex-wrap:wrap;
`
const Genre = styled.li `
  margin: 10px;
  padding: 20px;
  border: 2px solid ${({theme})=> theme.colors.primary}
`
class GenresPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      genres: []
    };
  }
  getData() {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    axios
      .get(url)
      .then(res => res.data.genres)
      .then(
        result => {
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
            <GenresList>
              {this.state.genres.map((genre, index) => {
                return (
                  <Link
                    to={`/genre/${this.state.genres[index].id}`}
                    key={index}
                  >
                    <Genre>
                      <p>{this.state.genres[index].name}</p>
                    </Genre>
                  </Link>
                );
              })}
            </GenresList>
    );
  }
}

export default GenresPage;
