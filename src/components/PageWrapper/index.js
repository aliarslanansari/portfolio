import { useMediaQuery } from 'react-responsive'
import React from 'react'
import styled, { css } from 'styled-components'
import { containerPadding } from '../../utils/styleUtils'

const Wrapper = styled.main`
  ${(props) => containerPadding(props.isMobile)}
  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: bottom;
    `}
`

const PageWrapper = ({ children, background }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return (
    <Wrapper background={background} isMobile={isMobile}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
