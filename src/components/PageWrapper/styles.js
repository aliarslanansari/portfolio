import styled, { css } from 'styled-components'
import { containerPadding } from '../../utils/styleUtils'

export const Wrapper = styled.section`
  ${(props) => containerPadding(props.isMobile)}
  ${(props) =>
    props.topMargin &&
    css`
      margin-top: ${props.topMargin};
    `} 
  ${(props) =>
    props.bottomMargin &&
    css`
      margin-bottom: ${props.bottomMargin};
    `}
  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: bottom;
    `}
`
