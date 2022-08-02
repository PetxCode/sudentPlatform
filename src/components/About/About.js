import React from "react";
import styled from "styled-components";
import Powered from "../Landing/Powered";
import ConnectPage from "./ConnectPage";
import HeroPage from "./HeroPage";

const About = () => {
  return (
    <Container>
      <HeroPage />
      <ConnectPage />
      <Powered />
    </Container>
  );
};

export default About;

const Container = styled.div`
  /* padding-top: 100px; */
`;
