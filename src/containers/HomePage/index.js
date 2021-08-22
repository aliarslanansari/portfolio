import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import PatternBG from '../../assets/Pattern_Group.svg'
import DeveloperHello from './../../assets/DeveloperHello'

const StyledTextName = styled.span`
  font-family: DM Serif Text;
  font-style: normal;
  display: inline-block;
  font-weight: normal;
  font-size: 4rem;
  align-items: center;
  letter-spacing: 0.05em;
  color: #3355ff;
  text-shadow: 3px 2px 0px #bdc8fc;
`

const StyledText = styled.span`
  margin-right: 1rem;
  display: inline-block;
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

const Button = styled.button`
  width: 8rem;
  background: rgb(51, 85, 255);
  box-shadow: 0px 4px 14px #bdc8fc;
  border-radius: 10px;
  border: none;
  font-family: DM Serif Text;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  color: #ffffff;
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background: rgba(51, 85, 255, 0.9);
  }
`

const ButtonSecondary = styled.button`
  width: 8rem;
  margin-left: 1rem;
  border: 1px solid #3355ff;
  box-sizing: border-box;
  box-shadow: 0px 1px 14px 2px #bdc8fc;
  border-radius: 10px;
  padding: 0.5rem 0;
  cursor: pointer;
  font-family: DM Serif Text;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  color: #3355ff;
`

const DeveloperIllustration = styled(DeveloperHello)`
  width: 40vw;
  height: 20rem;
  @media (max-width: 768px) {
    width: 80vw;
  }
`

const HomePage = () => {
  return (
    <PageWrapper background={PatternBG}>
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
          <Button>See my work</Button>
          <ButtonSecondary>Contact me</ButtonSecondary>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <DeveloperIllustration />
        </Col>
      </Row>
    </PageWrapper>
  )
}

export default HomePage
