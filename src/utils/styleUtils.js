import { css } from 'styled-components'

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
      background-color: #3355ff;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `
}
