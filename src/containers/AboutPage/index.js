import { Col } from 'antd'
import { Row } from 'antd/es/grid'
import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { CustomTitle, StyledText, StyledTextName } from './styles'
import styled from 'styled-components'
import { CustomLink } from '../../components/BlogCard/styles'
const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
`

const AboutPage = () => {
  return (
    <PageWrapper>
      <CustomTitle>
        <StyledText> About </StyledText>
        <StyledTextName> Me</StyledTextName>
      </CustomTitle>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <AboutText>
            <p>
              Hi there, I'm a developer, working on full stack web development,
              I love making stuffs which looks good, easy to use and works well
              for everyone.
            </p>
            <p>
              I recently graduated from{' '}
              <CustomLink
                href='https://www.svkm-iot.ac.in/'
                target='_blank'
                rel='noreferrer'>
                SVKM Institute of Technology
              </CustomLink>{' '}
              with bachelor's degree in information technology, Whilst at
              institute, I interned at{' '}
              <CustomLink
                href='https://www.wednesday.is/'
                target='_blank'
                rel='noreferrer'>
                {' '}
                Wednesday Solution
              </CustomLink>{' '}
              where I worked on frontend development using React and Typescript.
              I organised events and hackathons like Coding Battle and
              TechnoUtsav.
            </p>
            <p>Here are some of the technologies I work with:</p>
            <ul>
              <li>
                React with{' '}
                <CustomLink
                  href='https://nextjs.org/'
                  target='_blank'
                  rel='noreferrer'>
                  {' '}
                  Nextjs{' '}
                </CustomLink>{' '}
                and{' '}
                <CustomLink
                  href='https://styled-components.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Styled Components
                </CustomLink>{' '}
              </li>
              <li>
                Nodejs with Express and{' '}
                <CustomLink
                  href='https://www.apollographql.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Apollo-GraphQL
                </CustomLink>
              </li>
              <li>
                Database like MongoDB, MySQL and{' '}
                <CustomLink
                  href='https://aws.amazon.com/dynamodb/'
                  target='_blank'
                  rel='noreferrer'>
                  DynamoDB
                </CustomLink>
              </li>
            </ul>

            <p>
              When i'm not coding, i love to play with figma, interact with
              people in the dev community on{' '}
              <CustomLink
                href='https://twitter.com/intent/follow?screen_name=aliarslanansari'
                target='_blank'
                rel='noreferrer'>
                twitter.
              </CustomLink>
            </p>
          </AboutText>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
      </Row>
    </PageWrapper>
  )
}

export default AboutPage
