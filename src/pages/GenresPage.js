import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Genre = styled.li`
  margin: 10px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const GenresPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US`;

    axios
      .get(url)
      .then(res => res.data.genres)
      .then(
        result => {
          setLoaded(true);
          setGenres(result);
        },
        error => {
          setLoaded(true);
          setError(error);
        }
      );
  });
  return (
    <GenresList>
      {genres.map((genre, index) => {
        return (
          <Link to={`/genre/${genres[index].id}`} key={index}>
            <Genre>
              <p>{genres[index].name}</p>
            </Genre>
          </Link>
        );
      })}
    </GenresList>
  );
};

export default GenresPage;
