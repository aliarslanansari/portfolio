import { Col, Row } from "antd/es/grid";
import mixpanel from "mixpanel-browser";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import ProjectCard from "../../components/ProjectCard";
import { projectList } from "../../data";
import { getClickableLinkStyle } from "../../utils/styleUtils";
import { CustomTitle, StyledText, StyledTextName } from "../BlogsPage/styles";

const StyledCol = styled(Col)`
  margin-bottom: 1rem;
`;
const CustomRouterLink = styled(Link)`
  ${getClickableLinkStyle()}
  color: #3355ff;
  &:hover {
    color: #3355ff;
  }
`;
const ProjectPage = ({ showAll, isHome }) => {

  useEffect(() => {
    if(!isHome){
      mixpanel.track('HOME_PAGE_VISITED')
    }
  }, [isHome])

  const seeMoreProjectClicked = () => {
    if (isHome) {
      mixpanel.track("HOME_SEE_MORE_PROJECT_CLICKED");
    } else {
      mixpanel.track("PROJECTPAGE_SEE_MORE_PROJECT_CLICKED");
    }
  };

  const projects = showAll ? projectList : projectList.slice(0, 2);

  return (
    <PageWrapper bottomMargin={"4rem"}>
      {showAll && (
        <CustomTitle>
          <StyledText> My </StyledText>
          <StyledTextName> Projects</StyledTextName>
        </CustomTitle>
      )}
      <Row gutter={16}>
        {projects.map((project) => (
          <StyledCol
            xs={24}
            key={project.title}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <ProjectCard isHome={isHome} {...project} />
          </StyledCol>
        ))}
      </Row>
      {!showAll && (
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <CustomRouterLink to="/project" onClick={seeMoreProjectClicked}>
              See more projects
            </CustomRouterLink>
          </Col>
        </Row>
      )}
    </PageWrapper>
  );
};

export default ProjectPage;
