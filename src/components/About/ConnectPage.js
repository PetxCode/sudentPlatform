import React from "react";
import styled from "styled-components";
import pix from "./pix.jpg";

const ConnectPage = () => {
  return (
    <Container>
      <Wrapper>
        <TopText>
          We connect you with technology to <span>grow</span>.
        </TopText>
        <SubText>
          We exist to connect you with scalable innovation so you can focus on
          the the things that matter in your business.
        </SubText>
        <br />
        <Image src={pix} />
        <br />
        <br />
        <br />
        <TopText fs>
          Our <span>process</span>.
        </TopText>
        <SubText>
          Because every project is distinct, there’s no one-size-fits-all
          process, however, we have narrowed down all of it to three major
          phases.
        </SubText>

        <HolderView
          title="Learning the"
          title2="FUNDAMENTALS"
          desc="We meet you to discuss and understand your idea. Then we outline
            your business objectives, the market needs and align them with the
            overall product goals."
          desc2="We go further to research the target user, how they would interact
            with your solution as well as the best platforms and infrastructure
            to deliver your solution to them."
          pix={pix}
        />
        <br />
        <br />
        <HolderView
          title="Testing your feets in the"
          title2="WATERS"
          desc="We meet you to discuss and understand your idea. Then we outline
            your business objectives, the market needs and align them with the
            overall product goals."
          desc2="We go further to research the target user, how they would interact
            with your solution as well as the best platforms and infrastructure
            to deliver your solution to them."
          pix={pix}
          f
        />
        <br />
        <br />
        <HolderView
          title="Diving deep into"
          title2="CODING"
          desc="We meet you to discuss and understand your idea. Then we outline
            your business objectives, the market needs and align them with the
            overall product goals."
          desc2="We go further to research the target user, how they would interact
            with your solution as well as the best platforms and infrastructure
            to deliver your solution to them."
          pix={pix}
        />
      </Wrapper>
    </Container>
  );

  function HolderView({ f, title, title2, desc, desc2, pix }) {
    return (
      <Holder f={f}>
        <TextHolder>
          <Title>
            {title}
            <span>{title2}</span>
          </Title>
          <TextView>{desc}</TextView>
          <br />
          <TextView>{desc2}</TextView>
        </TextHolder>

        <ImageCheck>
          <ImageHold src={pix} />
        </ImageCheck>
      </Holder>
    );
  }
};

export default ConnectPage;

const ImageHold = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    height: 400px;
  }
`;

const ImageCheck = styled.div`
  flex: 0.5;
  height: 100%;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const TextView = styled.div`
  font-weight: 300;
  font-size: 15px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  span {
    margin: 0 5px;
    color: darkorange;
    font-weight: 700;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
`;

const Holder = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: space-between;
  min-height: 300px;
  flex-direction: ${({ f }) => (f ? "row-reverse" : "row")};
  margin: 40px 0;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
`;

const SubText = styled.div`
  width: 50%;
  text-align: center;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const TopText = styled.div`
  width: 40%;
  font-size: ${({ fs }) => (fs ? "30px" : "50px")};
  font-weight: 700;
  text-align: center;
  line-height: 1;
  margin-bottom: 30px;

  span {
    color: darkorange;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
