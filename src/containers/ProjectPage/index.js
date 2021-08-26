import { Col, Row } from 'antd/es/grid'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper'
import ProjectCard from '../../components/ProjectCard'
import { getClickableLinkStyle } from '../../utils/styleUtils'
import { CustomTitle, StyledText, StyledTextName } from '../BlogsPage/styles'

const StyledCol = styled(Col)`
  margin-bottom: 1rem;
`
const CustomRouterLink = styled(Link)`
  ${getClickableLinkStyle()}
  color: #3355ff;
  &:hover {
    color: #3355ff;
  }
`
const ProjectPage = ({ showAll }) => {
  return (
    <PageWrapper topMargin={'5rem'} bottomMargin={'4rem'}>
      {showAll && (
        <CustomTitle>
          <StyledText> My </StyledText>
          <StyledTextName> Projects</StyledTextName>
        </CustomTitle>
      )}
      <Row gutter={16}>
        {[1, 2].map((i) => (
          <StyledCol xs={24} key={i} sm={24} md={12} lg={12} xl={12}>
            <ProjectCard />
          </StyledCol>
        ))}
      </Row>
      {!showAll && (
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CustomRouterLink to='/project'>See more projects</CustomRouterLink>
          </Col>
        </Row>
      )}
    </PageWrapper>
  )
}

export default ProjectPage
