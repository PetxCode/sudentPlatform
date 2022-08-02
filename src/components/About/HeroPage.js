import React from "react";
import styled from "styled-components";

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Top>
            Ship apps fast, within <span>Budgeted</span> <br />
            plan<span>!</span>
          </Top>
          <Sub>
            We work with ambitious teams to design, build and maintain digital
            products that make news.
          </Sub>
        </Holder>
      </Wrapper>{" "}
    </Container>
  );
};

export default HeroPage;

const Sub = styled.div`
  font-weight: 500;
  color: black;
  font-size: 20px;
`;

const Top = styled.div`
  font-size: 70px;
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 50px;
  margin-top: 70px;
  color: black;

  @media screen and (max-width: 700px) {
    font-size: 50px;
  }

  span {
    color: darkorange;
    margin: 0 5px;
  }
`;

const Holder = styled.div`
  width: 400px;
  margin-left: 150px;

  @media screen and (max-width: 700px) {
    margin-left: 50px;
  }
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
  background-image: url("/assets/bbg.svg");
  /* background-position: center; */
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
`;
