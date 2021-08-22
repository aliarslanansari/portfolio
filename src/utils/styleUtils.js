import { createGlobalStyle, css } from 'styled-components'

export const colors = {
  backgroungColor: '#3355ff',
}

export const getClickableLinkStyle = () => {
  return css`
    display: inline-block;
    position: relative;
    width: max-content;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.5px;
      bottom: 0;
      left: 0;
      background-color: ${colors.backgroungColor};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `
}

export const containerPadding = (isMobile) => {
  return css`
    padding: ${isMobile ? '0 1.5rem 0 1.5rem' : '0 10vw 0 10vw'};
  `
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F9FB;
    font-family: 'Segoe UI', sans-serif;
  }
`
