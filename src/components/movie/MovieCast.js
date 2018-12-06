import React, { Component } from "react";

class MovieCast extends Component {
  render() {
    const link = "https://image.tmdb.org/t/p/w300";
    const cast = this.props.cast;
    return (
      <div>
        {cast.slice(0, 10).map((el, index) => {
          return (
            <figure key={index}>
              <img src={link + cast[index].profile_path} alt="" />
              <figcaption>{cast[index].character}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  }
}

export default MovieCast;
