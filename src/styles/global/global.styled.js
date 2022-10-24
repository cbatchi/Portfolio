// @ts-nocheck
import { createGlobalStyle } from 'styled-components';
import { devices, theme } from '../themes/theme.styled';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  button,
  input,
  textarea {
    font-family: ${({ theme }) => theme.font.family.body};
    font-size: ${({ theme }) => theme.font.size.normal};
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.title};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }


  /* Global media queries */

  @media screen and (${devices.lg}) {
    
  }

  @media screen and (${devices.md}) {

  }

  @media screen and (${devices.sm}) {

  }

  @media screen and (${devices.xs}) {

  }

`

export default GlobalStyle;