import React, { useState, useEffect } from "react";
import MoviesItem from "../components/MoviesItem/MoviesItem";
import axios from "axios";
import { MovieList } from "../components/List/Lists";

const MoviesRatedPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&certification_country=US&certification=R&sort_by=vote_average.desc&vote_count.gte=10000`;

    axios
      .get(url)
      .then(res => res.data.results)
      .then(
        result => {
          setLoaded(true);
          setMovies(result);
        },
        error => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="movies moviesRated">
      <MovieList>
        {movies.map((movie, index) => {
          return (
            <MoviesItem
              key={index}
              movie={movie}
              index={index}
              movies={movies}
            />
          );
        })}
      </MovieList>
    </div>
  );
};

export default MoviesRatedPage;
