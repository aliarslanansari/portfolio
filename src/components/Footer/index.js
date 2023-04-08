import styled from "styled-components";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import mixpanel from "mixpanel-browser";

const CustomFooter = styled.footer`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8%;
`;

const Footer = () => {
  const triggerMixPanelEvent = (linkName) => () => {
    mixpanel.track("FOOTER_LINK_CLICKED", { linkName });
  };

  return (
    <CustomFooter>
      <a
        onClick={triggerMixPanelEvent("github")}
        href="https://github.com/aliarslanansari"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size="1.5rem" />
      </a>
      <a
        onClick={triggerMixPanelEvent("linkedin")}
        href="https://www.linkedin.com/in/aliarsalanansari/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size="1.5rem" />
      </a>
      <a
        onClick={triggerMixPanelEvent("twitter")}
        href="https://twitter.com/aliarslanansari"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle size="1.5rem" />
      </a>
      <a
        onClick={triggerMixPanelEvent("email")}
        href="mailto:aliarslan1620@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdEmail size="1.5rem" />
      </a>
    </CustomFooter>
  );
};

export default Footer;
