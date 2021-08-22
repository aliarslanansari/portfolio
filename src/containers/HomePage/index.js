import PageWrapper from '../../components/PageWrapper'
import React from 'react'
import BlogCard from '../../components/BlogCard'
import { Row, Col } from 'antd'
import PatternBG from '../../assets/Pattern_Group.svg'
import { useHistory } from 'react-router-dom'
import {
  Button,
  ButtonSecondary,
  CustomSubtitle,
  CustomTitle,
  DeveloperIllustration,
  HideOnMobileColumn,
  StyledText,
  StyledTextName,
} from './styles'

const HomePage = () => {
  const history = useHistory()
  const historyPushContact = () => {
    history.push('/contact')
  }
  return (
    <>
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
            <ButtonSecondary onClick={historyPushContact}>
              Contact me
            </ButtonSecondary>
          </Col>
          <HideOnMobileColumn xs={24} sm={24} md={10} lg={10} xl={10}>
            <DeveloperIllustration />
          </HideOnMobileColumn>
        </Row>
      </PageWrapper>
      <PageWrapper topMargin={'5rem'} bottomMargin={'4rem'}>
        <BlogCard
          title='Learn React Portals like a PRO.'
          time='Aug 2, 2021'
          readtime='4 minute read'
          description='Learn React Portals, why do we need Portals, and learn how to implement it.'
          link='https://blog.aliarslan.in/react-portals'
        />
      </PageWrapper>
    </>
  )
}

export default HomePage
