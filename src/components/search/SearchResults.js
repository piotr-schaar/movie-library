import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    
  }
  render() {
    const link = "https://image.tmdb.org/t/p/w300";

    return (
      <div className="searchResults">
        <ul id="results" onClick={this.handleClick}>
          {this.props.results.map((element, index) => {
            return (
              <li key={index} onClick={this.handleClick}>
                <img
                  src={
                    this.props.results[index].poster_path === null
                      ? "http://via.placeholder.com/300x450"
                      : `${link}${this.props.results[index].poster_path}`
                  }
                  alt={`${this.props.results[index].title} poster`}
                  className="resultPoster"
                />
                <div>
                  <p>{this.props.results[index].title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
