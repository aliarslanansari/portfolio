import Ellipsis from 'ant-design-pro/lib/Ellipsis'
import { Col, Row } from 'antd/es/grid'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper'
import ProjectCard from '../../components/ProjectCard'
import {
  CustomProjectLink,
  ProjectDate,
  ProjectDescription,
  ProjectTitle,
} from '../../components/ProjectCard/style'
import { neogCampProjects, projectList } from '../../data'
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

export const ProjectMetaContainer = styled.div`
  border: 1px solid rgba(51, 85, 255, 0.3);
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.5rem 0rem 0.5rem;
  background: #f9f9fb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`

const ProjectPage = ({ showAll }) => {
  const projects = showAll ? projectList : projectList.slice(0, 2)
  return (
    <PageWrapper bottomMargin={'4rem'}>
      {showAll && (
        <CustomTitle>
          <StyledText> My </StyledText>
          <StyledTextName> Projects</StyledTextName>
        </CustomTitle>
      )}
      <Row gutter={16}>
        {projects.map((project) => (
          <StyledCol
            xs={24}
            key={project.title}
            sm={24}
            md={12}
            lg={12}
            xl={12}>
            <ProjectCard {...project} />
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
      {showAll && (
        <>
          <CustomTitle>
            <StyledTextName> Projects </StyledTextName>{' '}
            <StyledText> for</StyledText>
            <StyledTextName>neoG.Camp</StyledTextName>
          </CustomTitle>

          {neogCampProjects.map((project) => (
            <ProjectMetaContainer>
              <div style={{ marginTop: '0.5rem' }}>
                <ProjectTitle
                  href={project.code}
                  target='_blank'
                  rel='noreferrer'>
                  {project.title}
                </ProjectTitle>
                <ProjectDate>{`— ${project.time}`}</ProjectDate>
              </div>
              <ProjectDescription>
                <Ellipsis length={130}>{project.description}</Ellipsis>
              </ProjectDescription>
              <CustomProjectLink>
                <a href={project.code} rel='noreferrer' target='_blank'>
                  Github
                </a>
                <a href={project.link} rel='noreferrer' target='_blank'>
                  Live Demo
                </a>
              </CustomProjectLink>
            </ProjectMetaContainer>
          ))}
        </>
      )}
    </PageWrapper>
  )
}

export default ProjectPage
