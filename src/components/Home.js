import React, { Component } from "react";
import Header from "./header/Header";
import MoviesNew from "./movies/MoviesNew";
import SearchForm from "./search/SearchForm";
class Home extends Component {
  constructor() {
    super();
    this.state = {
        isHome: true
    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm />
        <MoviesNew isHome={this.state.isHome} />
      </div>
    );
  }
}

export default Home;
