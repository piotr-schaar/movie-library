import React, { Component } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import styled from "styled-components";
import { ContainWrapper } from "../../layout/wrappers";

const FormStyled = styled.form`
  width: 100%;
`;
const InputStyled = styled.input`
  width: 100%;
  border: none;
  height: 4rem;
  font-size: 1.2em;
  padding-left: 25px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.bold};
  background: none;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  outline:none;
  letter-spacing:1px;
`;
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
      <ContainWrapper>
        <FormStyled onSubmit={this.handleSubmit} id="form">
          <InputStyled
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            className="inputSearch"
            id="input"
            placeholder="What you looking for?"
          />
          <SearchResults
            value={this.state.value}
            results={this.state.results}
          />
        </FormStyled>
      </ContainWrapper>
    );
  }
}

export default SearchForm;
