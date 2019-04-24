import React from "react";
import { Link } from "react-router-dom";
import { MovieListItem } from "../List/Lists";
import styled from "styled-components";

const MovieListItemInfo = styled.div`
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

const Para = styled.p`
  padding: 10px 0;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.font.regular};
`;

const Img = styled.img``;

const Rating = styled.div`
    font-size: 3rem;
    padding:30px 50px;
    border: 2px solid ${({ theme }) => theme.colors.primary}
    position:absolute;
    top:1rem;
    right:0;
`;

const MoviesItem = ({ index, movies }) => {
  const {
    id,
    poster_path,
    title,
    release_date,
    overview,
    vote_average
  } = movies[index];
  return (
    <MovieListItem>
      <Link to={`/movie/${id}`} key={id}>
        <Img
          src={
            poster_path === null
              ? "http://via.placeholder.com/300x450"
              : `https://image.tmdb.org/t/p/w300/${poster_path}`
          }
          alt={``}
        />
        <MovieListItemInfo>
          <H3>{title}</H3>
          <Para>Release date: {release_date}</Para>
          <Para>{overview}</Para>
          <Rating>{vote_average}</Rating>
        </MovieListItemInfo>
      </Link>
    </MovieListItem>
  );
};

export default MoviesItem;
