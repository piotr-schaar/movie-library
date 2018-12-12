import React, { Component } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import MovieCast from "../components/movie/MovieCast";
import Layout from "../layout/Layout";
import styled from "styled-components";

import { ContainWrapper } from "../layout/wrappers";
const MovieStyled = styled.div`
  display: flex;
`;
const MovieInfo = styled.div`
  padding: 25px;
  position: relative;
`;

const H3 = styled.h3`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.bold}
  width:75%;
  padding-bottom: 1rem;
`;

const LiStyled = styled.li`
  padding: 10px 0;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.font.regular};
`;

const Rating = styled.div`
    font-size: 3rem;
    padding:30px 50px;
    border: 2px solid ${({ theme }) => theme.colors.primary}
    position:absolute;
    top:1rem;
    right:0;
`;
const Para = styled.p`
  padding: 10px 0;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.font.regular};
`;
const Img = styled.img`
  max-height: 450px;
`;
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
            <MovieStyled>
              <Img
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
              <MovieInfo>
                <H3>{this.state.movie.title}</H3>
                <ul>
                  <Rating>{this.state.movie.vote_average}</Rating>
                  <LiStyled>Vote Count: {this.state.movie.vote_count}</LiStyled>
                  <LiStyled>
                    Genres: <space />
                    {this.state.movie.genres.map((element, index) => {
                      if (index < this.state.movie.genres.length - 1) {
                        return this.state.movie.genres[index].name + ", ";
                      } else {
                        return this.state.movie.genres[index].name;
                      }
                    })}
                  </LiStyled>
                </ul>
                <Para>{this.state.movie.overview}</Para>
              </MovieInfo>
            </MovieStyled>

            <MovieCast cast={this.state.movie.credits.cast} />
          </ContainWrapper>
        </Layout>
      </>
    );
  }
}

export default Movie;
