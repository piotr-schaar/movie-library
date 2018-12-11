import React, { Component } from "react";
import styled from "styled-components";

const UlStyled = styled.ul`
  display: flex;
  padding: 3rem 0;
  flex-wrap: wrap;
`;

const LiStyled = styled.li`
  width: 50%;
  padding: 1rem 1rem;
`;
const WrapperStyled = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 150px;
  height: 225px;
  display: flex;
`;
const Para = styled.p`
  padding: 10px 25px;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.font.bold}
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2em;
`;

class MovieCast extends Component {
  render() {
    const link = "https://image.tmdb.org/t/p/w300";
    const cast = this.props.cast;
    return (
      <UlStyled>
        {cast.slice(0, 10).map((el, index) => {
          return (
            <LiStyled>
              <WrapperStyled key={index}>
                <Img src={link + cast[index].profile_path} alt="" />
                <Para>{cast[index].character}</Para>
              </WrapperStyled>
            </LiStyled>
          );
        })}
      </UlStyled>
    );
  }
}

export default MovieCast;
