import React from 'react'
import BlogCard from '../../components/BlogCard'
import PageWrapper from '../../components/PageWrapper'
import { blogList } from '../../data'
import { CustomTitle, StyledText, StyledTextName } from './styles'

const BlogsPage = () => {
  return (
    <PageWrapper>
      <CustomTitle>
        <StyledText> My </StyledText>
        <StyledTextName> Blog</StyledTextName>
        <StyledText style={{ marginLeft: '1rem' }}> Posts </StyledText>
      </CustomTitle>
      {blogList.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </PageWrapper>
  )
}

export default BlogsPage
