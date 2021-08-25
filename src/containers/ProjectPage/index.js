import { Col, Row } from 'antd/es/grid'
import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper'
import ProjectCard from '../../components/ProjectCard'
import { CustomTitle, StyledText, StyledTextName } from '../BlogsPage/styles'

const StyledCol = styled(Col)`
  margin-bottom: 1rem;
`

const ProjectPage = ({ showTitle }) => {
  return (
    <PageWrapper topMargin={'5rem'} bottomMargin={'4rem'}>
      {showTitle && (
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
    </PageWrapper>
  )
}

export default ProjectPage
