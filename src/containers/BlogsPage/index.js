import React from 'react'
import BlogCard from '../../components/BlogCard'
import PageWrapper from '../../components/PageWrapper'
import { CustomTitle, StyledText, StyledTextName } from './styles'

const BlogsPage = () => {
  return (
    <PageWrapper>
      <CustomTitle>
        <StyledText> My </StyledText>
        <StyledTextName> Blog</StyledTextName>
        <StyledText style={{ marginLeft: '1rem' }}> Posts </StyledText>
      </CustomTitle>
      <BlogCard
        title='Learn React Portals like a PRO.'
        time='Aug 2, 2021'
        readtime='4 minute read'
        description='Learn React Portals, why do we need Portals, and learn how to implement it.'
        link='https://blog.aliarslan.in/react-portals'
      />{' '}
      <BlogCard
        title='Learn React Portals like a PRO.'
        time='Aug 2, 2021'
        readtime='4 minute read'
        description='Learn React Portals, why do we need Portals, and learn how to implement it.'
        link='https://blog.aliarslan.in/react-portals'
      />{' '}
      {/* <BlogCard
        title='Learn React Portals like a PRO.'
        time='Aug 2, 2021'
        readtime='4 minute read'
        description='Learn React Portals, why do we need Portals, and learn how to implement it.'
        link='https://blog.aliarslan.in/react-portals'
      /> */}
    </PageWrapper>
  )
}

export default BlogsPage
