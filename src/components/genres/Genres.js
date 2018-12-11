import React, { Component } from "react";
import axios from "axios";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { ContainWrapper } from "../../layout/wrappers";
import Layout from "../../layout/Layout";
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
      <Layout>
        <ContainWrapper>
          <Header />
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
        </ContainWrapper>
      </Layout>
    );
  }
}

export default Genres;
