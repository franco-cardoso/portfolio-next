import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <Container>
      <IconWrapper href="/">
        <a href="https://github.com/franco-cardoso" rel="noreferrer" target={"_blank"}>
          <FaGithub color="#e4e4e4" size={20} />
        </a>
      </IconWrapper>
      <IconWrapper href="/">
        <a href="https://www.linkedin.com/in/franco-cardoso-854442241/" rel="noreferrer" target={"_blank"}>
          <FaLinkedinIn color="#e4e4e4" size={20} />
        </a>
      </IconWrapper>
    </Container>
  );
};

const IconWrapper = styled.a`
  text-decoration: none;
  margin: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default SocialMedia;
