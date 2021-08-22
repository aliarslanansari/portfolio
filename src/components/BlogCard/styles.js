import styled from 'styled-components'

export const CustomBlogCard = styled.div`
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
  border-left: 2px solid #3355ff;

  display: flex;
  flex-direction: column;
  padding: 0rem 1rem 0rem 0.5rem;
  margin-bottom: 1rem;
`

export const CustomLink = styled.a`
  align-self: flex-end;
  text-decoration: underline;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  text-decoration-line: underline;
  color: #3355ff;
  cursor: pointer;
`
export const BlogTitle = styled.a`
  margin: 0;
  font-family: DM Serif Text;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-decoration-line: underline;
  color: #3355ff;
  &:hover {
    color: #3355ff;
  }
`

export const BlogTiming = styled.h4`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #a1a1a2;
`

export const BlogDescription = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.87);
`
