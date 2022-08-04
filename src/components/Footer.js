import React from "react";
import styled from "styled-components";

import { FaGlobeAmericas } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Places title="orige" />
        <Places title="wilmer" />
        {/* <Places title="ojo road" /> */}

        <br />
        <br />

        <Social>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <Icon />
          </Move>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <FaIcon />
          </Move>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <LiIcon />
          </Move>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <TwIcon />
          </Move>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <InIcon />
          </Move>
        </Social>

        <Last>
          <SideText>© 2020 - 2022 Codelab in Initiative of SkillHub •</SideText>
          <Other>PRIVACY POLICY</Other>
        </Last>
      </Wrapper>
    </Container>
  );

  function Places({ title }) {
    return (
      <Place>
        <Title>{title}</Title>
        <Text>Ajegunle-Lagos, Nigeria </Text>
      </Place>
    );
  }
};

export default Footer;

const SideText = styled.div`
  font-size: 12px;
  font-weight: 200;
  text-transform: uppercase;
`;
const Other = styled.div`
  font-size: 12px;
`;

const Last = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const InIcon = styled(AiFillInstagram)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const LiIcon = styled(AiFillLinkedin)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const TwIcon = styled(AiFillTwitterSquare)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const FaIcon = styled(AiFillFacebook)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Icon = styled(FaGlobeAmericas)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Move = styled.a`
  text-decoration: none;
  color: gray;
  margin: 0 10px;
  height: 40px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
`;

const Text = styled.div`
  margin-left: 5px;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
`;

const Place = styled.div`
  margin: 20px 40px;
`;

const Wrapper = styled.div`
  width: 80%;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: #1e1f21;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: relative;
`;
