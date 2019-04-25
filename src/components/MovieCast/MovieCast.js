import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
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

const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 150px;
  height: 225px;
  display: flex;
`;
const Paragraph = styled.p`
  padding: 10px 25px;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ isWhite }) =>
    isWhite ? "white" : ({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  display: flex;
`;

const link = "https://image.tmdb.org/t/p/w300";

const MovieCast = ({ cast }) => (
  <ListWrapper>
    {cast.slice(0, 10).map((el, index) => {
      return (
        <LiStyled key={index}>
          <WrapperStyled>
            <Img src={link + cast[index].profile_path} alt="" />
            <CastInfo>
              <Paragraph>{cast[index].name}</Paragraph>
              <Paragraph>as</Paragraph>
              <Paragraph isWhite>{cast[index].character}</Paragraph>
            </CastInfo>
          </WrapperStyled>
        </LiStyled>
      );
    })}
  </ListWrapper>
);

export default MovieCast;
