import {
  BlogDescription,
  BlogTiming,
  BlogTitle,
  CustomBlogCard,
  CustomLink,
} from './styles'

const BlogCard = ({ title, description, time, readtime, link }) => {
  return (
    <CustomBlogCard>
      <BlogTitle href={link} target='_blank' rel='noreferrer'>
        {title}
      </BlogTitle>
      <BlogTiming>
        Published on {time} {readtime && `— ${readtime}`}
      </BlogTiming>
      <BlogDescription>{description}</BlogDescription>
      <CustomLink href={link} target='_blank'>
        Read this blog
      </CustomLink>
    </CustomBlogCard>
  )
}

export default BlogCard
