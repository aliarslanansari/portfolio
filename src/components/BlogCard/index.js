import {
  BlogDescription,
  BlogTiming,
  BlogTitle,
  CustomBlogCard,
  CustomLink,
} from './styles'

const BlogCard = ({
  title,
  description,
  time,
  readtime,
  link,
  onClick,
}) => {
  console.log({onClick})
  return (
    <CustomBlogCard>
      <BlogTitle href={link} target="_blank" rel="noreferrer">
        {title}
      </BlogTitle>
      <BlogTiming>
        Published on {time} {readtime && `— ${readtime}`}
      </BlogTiming>
      <BlogDescription>{description}</BlogDescription>
      <CustomLink onClick={onClick} href={link} target="_blank">
        Read this blog
      </CustomLink>
    </CustomBlogCard>
  );
};

export default BlogCard
