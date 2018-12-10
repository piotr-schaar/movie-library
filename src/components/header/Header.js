import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import styled from "styled-components";

const H1 = styled.h1`
  color: ;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Link to={"/"}>
          <H1>Movie Library</H1>
        </Link>
        <HeaderNav />
      </HeaderStyled>
    );
  }
}

export default Header;
