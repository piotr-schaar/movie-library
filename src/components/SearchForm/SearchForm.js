import React, { useState } from "react";
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  letter-spacing: 1px;
`;

const SearchForm = () => {
  const [value, setValue] = useState("");
  const [results, getResults] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
    getDataResults(value);
  };

  const getDataResults = value => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&query=${value}&page=1&include_adult=false`;
    axios
      .get(url)
      .then(res => res.data.results)
      .then(result => {
        getResults(result);
      });
  };
  return (
    <ContainWrapper>
      <FormStyled id="form">
        <InputStyled
          type="text"
          value={value}
          onChange={handleChange}
          className="inputSearch"
          id="input"
          placeholder="What you looking for?"
        />
        <SearchResults value={value} results={results} />
      </FormStyled>
    </ContainWrapper>
  );
};


export default SearchForm;
