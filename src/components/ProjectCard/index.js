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

const ProjectCard = () => {
  return (
    <ProjectContainer>
      <ProjectImage src={DevResProj} alt='React Portals' />
      <ProjectMetaContainer>
        <div style={{ marginTop: '0.5rem' }}>
          <ProjectTitle
            href={'https://blog.aliarslan.in/react-portals'}
            target='_blank'
            rel='noreferrer'>
            {'React Portals '}
          </ProjectTitle>
          <ProjectDate>{`— ${'May 2021'}`}</ProjectDate>
        </div>
        <ProjectDescription>
          <Ellipsis length={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            laborum beatae, consequatur ab quidem aperiam sapiente. Esse quas
            incidunt rem.
          </Ellipsis>
        </ProjectDescription>
        <CustomProjectLink>
          <a
            href={'https://blog.aliarslan.in/react-portals'}
            rel='noreferrer'
            target='_blank'>
            Explore
          </a>
          <a
            href={'https://blog.aliarslan.in/react-portals'}
            rel='noreferrer'
            target='_blank'>
            Github
          </a>
          <a
            href={'https://blog.aliarslan.in/react-portals'}
            rel='noreferrer'
            target='_blank'>
            Live Demo
          </a>
        </CustomProjectLink>
      </ProjectMetaContainer>
    </ProjectContainer>
  )
}

export default ProjectCard
