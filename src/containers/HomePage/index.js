import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const StyledTextName = styled.span`
  font-family: DM Serif Text;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  align-items: center;
  letter-spacing: 0.05em;

  color: #3355ff;
  text-shadow: 3px 2px 0px #bdc8fc;
`

const StyledText = styled.span`
  font-family: DM Serif Text;
  text-shadow: 0.03em 0.03em rgb(51 85 255 / 30%);
  font-style: normal;
  font-size: 4rem;
  line-height: 0px;
  align-items: center;
  /* text-shadow: 3px 2px 0px #bdc8fc; */
  letter-spacing: 0.04em;
  color: #bdc8fc;
  font-weight: 400;
  text-shadow: 0.03em 0.03em rgb(51 85 255 / 30%);
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke: 1px #35f;
  -webkit-text-fill-color: transparent;
`

const CustomSubtitle = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000000;
`

const CustomTitle = styled.h1`
  margin-top: 4rem;
`

const HomePage = () => {
  return (
    <PageWrapper>
      <Row>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <CustomTitle>
            <StyledText> Hi, I'm</StyledText>
            <StyledTextName> Ali Arslan</StyledTextName>
          </CustomTitle>
          <CustomSubtitle>
            I’m a developer, I enjoy building web apps in React and Nextjs, I
            love discussing about web performance and serverless architecture,
            teaching others to code and organising events like hackathons.
          </CustomSubtitle>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          Hello
        </Col>
      </Row>
    </PageWrapper>
  )
}

export default HomePage
