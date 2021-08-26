import React from 'react'
import {
  CustomProjectLink,
  ProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectImage,
  ProjectMetaContainer,
  ProjectTitle,
} from './style'
import DevResProj from '../../assets/dev-resources-app.PNG'
import Ellipsis from 'ant-design-pro/lib/Ellipsis'

const ProjectCard = ({ title, time, description, link, code, img }) => {
  return (
    <ProjectContainer>
      <ProjectImage src={img} alt='React Portals' />
      <ProjectMetaContainer>
        <div style={{ marginTop: '0.5rem' }}>
          <ProjectTitle
            href={'https://blog.aliarslan.in/react-portals'}
            target='_blank'
            rel='noreferrer'>
            {title}
          </ProjectTitle>
          <ProjectDate>{`— ${time}`}</ProjectDate>
        </div>
        <ProjectDescription>
          <Ellipsis length={100}>{description}</Ellipsis>
        </ProjectDescription>
        <CustomProjectLink>
          <a href={code} rel='noreferrer' target='_blank'>
            Github
          </a>
          <a href={link} rel='noreferrer' target='_blank'>
            Live Demo
          </a>
        </CustomProjectLink>
      </ProjectMetaContainer>
    </ProjectContainer>
  )
}

export default ProjectCard
