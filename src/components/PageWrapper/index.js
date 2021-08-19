import { useMediaQuery } from 'react-responsive'
import React from 'react'
import styled from 'styled-components'
import { containerPadding } from '../../utils/styleUtils'

const Wrapper = styled.main`
  ${(props) => containerPadding(props.isMobile)}
`

const PageWrapper = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return <Wrapper isMobile={isMobile}>{children}</Wrapper>
}

export default PageWrapper
