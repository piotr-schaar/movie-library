import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import { ContainWrapper } from "../../layout/wrappers";

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.bold}
  font-size: 2em;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  align-items: center;
`;

const Header = () => (
  <ContainWrapper>
    <HeaderStyled>
      <Link to={"/"}>
        <H1>Movie Library</H1>
      </Link>
      <Navigation />
    </HeaderStyled>
  </ContainWrapper>
);

export default Header;
