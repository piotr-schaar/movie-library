import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import {theme} from "../utilis/theme";

const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;
        font-family: 'Montserrat'
        color:white;
    }
    *,*::before, *::after {
        box-sizing: border-box
    }
`;

const StyledWrapper = styled.div`
  background:${({theme}) => theme.colors.dark};
  color:white;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
