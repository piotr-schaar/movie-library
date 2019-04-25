import React from "react";
import { Link } from "react-router-dom";
import { MovieList } from "../List/Lists";
import MoviesItem from "../MoviesItem/MoviesItem";

const SearchResults = ({results, movies}) => (
  <MovieList>
  {results.map((movie, index) => {
    return (
      <Link to={`/movie/${results[index].id}`}>
        <MoviesItem
          movie={movie}
          key={index}
          index={index}
          movies={results}
        />
      </Link>
    );
  })}
</MovieList>
)



export default SearchResults;
