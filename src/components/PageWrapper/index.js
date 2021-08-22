import { useMediaQuery } from 'react-responsive'
import React from 'react'
import { Wrapper } from './styles'

const PageWrapper = ({ children, background, topMargin, bottomMargin }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return (
    <Wrapper
      background={background}
      isMobile={isMobile}
      topMargin={topMargin}
      bottomMargin={bottomMargin}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
