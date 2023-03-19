import React from "react";
import {
  CustomProjectLink,
  ProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectImage,
  ProjectMetaContainer,
  ProjectTitle,
} from "./style";
import Ellipsis from "ant-design-pro/lib/Ellipsis";
import mixpanel from "mixpanel-browser";

const ProjectCard = ({
  title: projectTitle,
  time,
  description,
  link,
  code,
  img,
  isHome,
}) => {
  const onProjectCardClicked =
    (ctaLabel = "CODE") =>
    () => {
      let location = "HOME";
      if (!isHome) {
        location = "PROJECTPAGE";
      }
      mixpanel.track(`${location}_PROJECT_CARD_${ctaLabel}_CLICKED`, {
        projectTitle,
      });
    };

  return (
    <ProjectContainer>
      <ProjectImage src={img} alt="React Portals" />
      <ProjectMetaContainer>
        <div style={{ marginTop: "0.5rem" }}>
          <ProjectTitle
            onClick={onProjectCardClicked("TITLE")}
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            {projectTitle}
          </ProjectTitle>
          <ProjectDate>{`— ${time}`}</ProjectDate>
        </div>
        <ProjectDescription>
          <Ellipsis length={130}>{description}</Ellipsis>
        </ProjectDescription>
        <CustomProjectLink>
          <a
            href={code}
            rel="noreferrer"
            target="_blank"
            onClick={onProjectCardClicked("CODE")}
          >
            Github
          </a>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            onClick={onProjectCardClicked("DEMO")}
          >
            Live Demo
          </a>
        </CustomProjectLink>
      </ProjectMetaContainer>
    </ProjectContainer>
  );
};

export default ProjectCard;
