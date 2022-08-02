import React from "react";
import styled from "styled-components";

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Top>
            Your <span>Technology</span> Partner<span>!</span>
          </Top>
          <Sub>
            We build and ship digital experiences that make life & business
            easier and faster.
          </Sub>
        </Holder>
      </Wrapper>{" "}
    </Container>
  );
};

export default HeroPage;

const Sub = styled.div`
  font-weight: 200;
`;

const Top = styled.div`
  font-size: 70px;
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    font-size: 50px;
  }

  span {
    color: darkorange;
  }
`;

const Holder = styled.div`
  width: 400px;
  margin-left: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/bg.svg");
  /* background-position: center; */
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
`;
