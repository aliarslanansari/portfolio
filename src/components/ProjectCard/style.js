import styled from 'styled-components'
import { getClickableLinkStyle } from '../../utils/styleUtils'

export const ProjectTitle = styled.a`
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
export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  height: 13rem;
`
export const ProjectMetaContainer = styled.div`
  margin-top: -2rem;
  border: 1px solid rgba(51, 85, 255, 0.3);
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.5rem 0rem 0.5rem;
  background: #f9f9fb;
  border-radius: 0.5rem;
`
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
`

export const ProjectDate = styled.h4`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  display: inline-block;
  color: #a1a1a2;
  margin-left: 1rem;
`

export const ProjectDescription = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.87);
`

export const CustomProjectLink = styled.p`
  align-self: flex-end;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1200px) {
    /* padding: 0 5rem 0 5rem; */
    width: 50%;
  }
  @media (max-width: 1024px) {
    /* padding: 0 3rem 0 3rem; */
    width: 70%;
  }
  @media (min-width: 1201px) {
    /* padding: 0 15rem 0 15rem; */
    width: 60%;
  }
  @media (max-width: 520px) {
    /* padding: 0 1.5rem 0 1.5rem; */
    width: 80%;
  }
  & > a {
    text-decoration: none;
    color: #3355ff;
    &:hover {
      color: #3355ff;
    }
    ${getClickableLinkStyle()}
  }
`
