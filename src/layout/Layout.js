import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utilis/theme";

const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;
        font-family: 'Montserrat';
        color:white;
        overflow-x:hidden;
        
    }
    *,*::before, *::after {
        box-sizing: border-box
    }
    a{
      color: ${({ theme }) => theme.colors.white};
    } 
`;

const StyledWrapper = styled.div`
  color: white;
  background: ${({ theme }) => theme.colors.dark};
  min-height: 100vh;
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
