import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCast from "../components/MovieCast/MovieCast";
import styled from "styled-components";

const MovieWrapper = styled.div`
  display: flex;
`;
const MovieInfoWrapper = styled.div`
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

const MoviePage = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    let id = window.location.pathname.split("/").pop();
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&append_to_response=credits`;

    axios
      .get(url)
      .then(res => res.data)
      .then(
        result => {
          const movie = result;
          setMovie(movie);
          setLoaded(true);
          setGenres(movie.genres);
          setCast(movie.credits.cast);
        },
        error => {
          setLoaded(true);
          setError(true);
        }
      );
  }, {});

  const {
    title,
    poster_path: poster,
    vote_average,
    vote_count,
    overview
  } = movie;
  return (
    <>
      <MovieWrapper>
        <Img
          src={
            poster === null
              ? "http://via.placeholder.com/300x450"
              : `https://image.tmdb.org/t/p/w300${poster}`
          }
          alt={`${title} poster`}
          className="movie_poster"
        />
        <MovieInfoWrapper>
          <H3>{title}</H3>
          <ul>
            <Rating>{vote_average}</Rating>
            <LiStyled>Vote Count: {vote_count}</LiStyled>
            <LiStyled>
              Genres:
              {genres.map(genre => {
                return <p>{genre.name}</p>;
              })}
            </LiStyled>
          </ul>
          <Para>{overview}</Para>
        </MovieInfoWrapper>
      </MovieWrapper>
      <MovieCast cast={cast} />
    </>
  );
};
export default MoviePage;
