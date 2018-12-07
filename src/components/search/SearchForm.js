import React, { Component } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      results: [],
      showResults: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value: value
    });
    this.getData(value);
  }
  handleKeyUp() {
    if (this.state.value === "") {
      document.getElementById("results").toggleClass("noDisplay") ;
    } 
  }

  getData(value) {
    const key = "bd5f28af222edabf18f21f9cf5683cca";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${value}&page=1&include_adult=false`;

    axios
      .get(url)
      .then(res => res.data.results)
      .then(result => {
        this.setState({
          results: result
        });
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          className="inputSearch"
          id="input"
        />
        <SearchResults value={this.state.value} results={this.state.results} />
      </form>
    );
  }
}

export default SearchForm;
