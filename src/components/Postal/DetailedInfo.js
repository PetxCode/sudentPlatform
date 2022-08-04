import React from "react";
import styled from "styled-components";
import img1 from "./cup.svg";
import img2 from "./cup.svg";
import arr from "./cup.svg";
import InfoProps from "./InfoProps";

const DetailedInfo = () => {
  return (
    <Container>
      <Wrapper>
        <InfoProps
          img={img1}
          bg1="#F9AF2F"
          bg
          title="Work With the Best"
          text="The most brilliant minds in React engineering choose Andela. And with good reason. Our meticulous vetting process proves that we are serious about drawing in only the best talent and ascertaining the best-fit company matches."
          text2="
          Today, many of our successful candidates are in key leadership roles and driving the success of their front-end development strategies. Their globally diverse experiences provide the multi-angular perspective necessary for understanding complex customer workflows and designing insightful solutions adapted to specific customer requirements."
        />
      </Wrapper>
    </Container>
  );
};

export default DetailedInfo;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
