import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const LiStyled = styled.li`
  font-weight: ${({ theme }) => theme.font.bold};
`;

const Navigation = () => (
  <NavWrapper>
    <LiStyled>
      <Link to={"/popular-movies"}>Popular</Link>
    </LiStyled>
    <LiStyled>
      <Link to={"/rated-movies"}>Top Rated</Link>
    </LiStyled>
    <LiStyled>
      <Link to={"/hot-movies"}>In Theatres</Link>
    </LiStyled>
    <LiStyled>
      <Link to={"/genres"}>Genres</Link>
    </LiStyled>
    <LiStyled>
      <Link to={"/search"}>Find movie</Link>
    </LiStyled>
  </NavWrapper>
);

export default Navigation;
