import { Col, Row } from "antd";
import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import { CustomTitle, StyledText, StyledTextName } from "../HomePage/styles";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
const CustomContactSocials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CustomLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  color: #3355ff;
  &:hover {
    color: #3355ff;
  }
`;

const ContactPage = () => {
  useEffect(() => {
    mixpanel.track("CONTACT_PAGE_VISITED");
  }, []);

  const triggerMixPanelEvent = (linkName) => () => {
    mixpanel.track("CONTACTPAGE_LINK_CLICKED", { linkName });
  };

  return (
    <PageWrapper bottomMargin={"4rem"}>
      <CustomTitle>
        <StyledTextName> Contact</StyledTextName>
        <StyledText style={{ marginLeft: "1rem" }}> Me </StyledText>
      </CustomTitle>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <p>
            If you like what you've seen on my site, I'd love for you to get in
            touch via my contact form or social media!
          </p>
          <CustomContactSocials>
            <CustomLink
              onClick={triggerMixPanelEvent("github")}
              href="https://github.com/aliarslanansari"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="1.5rem" style={{ marginRight: 5 }} /> See my
              projects and source code.
            </CustomLink>
            <CustomLink
              onClick={triggerMixPanelEvent("linkedin")}
              href="https://www.linkedin.com/in/aliarsalanansari/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size="1.5rem" style={{ marginRight: 5 }} />{" "}
              Connect with me.
            </CustomLink>
            <CustomLink
              onClick={triggerMixPanelEvent("twitter")}
              href="https://twitter.com/intent/follow?screen_name=aliarslanansari"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle size="1.5rem" style={{ marginRight: 5 }} />{" "}
              Follow me on Twitter.
            </CustomLink>
            <CustomLink
              onClick={triggerMixPanelEvent("email")}
              href="mailto:aliarslan1620@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail size="1.5rem" style={{ marginRight: 5 }} /> Send me a
              mail
            </CustomLink>
          </CustomContactSocials>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
      </Row>
    </PageWrapper>
  );
};

export default ContactPage;
