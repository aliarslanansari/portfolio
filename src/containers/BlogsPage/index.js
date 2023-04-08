import mixpanel from "mixpanel-browser";
import React, { useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import PageWrapper from "../../components/PageWrapper";
import { blogList } from "../../data";
import { CustomTitle, StyledText, StyledTextName } from "./styles";

const BlogsPage = () => {
  useEffect(() => {
    mixpanel.track("BLOG_PAGE_VISITED");
  }, []);

  const onBlogClicked = (blobDetails) => () => {
    console.log('BLOGPAGE_BLOG_CARD_CLICKED')
    mixpanel.track("BLOGPAGE_BLOG_CARD_CLICKED", blobDetails);
  };

  return (
    <PageWrapper>
      <CustomTitle>
        <StyledText> My </StyledText>
        <StyledTextName> Blog</StyledTextName>
        <StyledText style={{ marginLeft: "1rem" }}> Posts </StyledText>
      </CustomTitle>
      {blogList.map((blog) => (
        <BlogCard key={blog.title} {...blog} onClick={onBlogClicked(blog)} />
      ))}
    </PageWrapper>
  );
};

export default BlogsPage;
