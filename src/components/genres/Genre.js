import React, { useState, useEffect } from "react";
import MovieItem from "../MoviesItem/MoviesItem";
import axios from "axios";

const Genre = () => {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    let id = window.location.pathname.split("/").pop();
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&with_genres=${id}&sort_by=vote_average.desc&vote_count.gte=1000`;
    axios
      .get(url)
      .then(res => res.data.results)
      .then(result => {
        getMovies([...result]);
      });
  });
  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem index={index} key={index} movie={movie} movies={movies} />
      ))}
    </ul>
  );
};

export default Genre;
