import React from "react";
import styled from "styled-components";
import pix from "./pix.jpg";
import pix1 from "./p.jpg";
import pix2 from "./3q.jpg";
import pix3 from "./12.jpg";
import pix4 from "./11.jpg";

const ConnectPage = () => {
  return (
    <Container>
      <Wrapper>
        <TopText>
          We're Building Software Training <span>Infrastructure</span> Across{" "}
          <span>Slum Communities</span>.
        </TopText>
        <SubText>
          For us at CodeLab, we are committed to creating software training
          infrastructure within Rural communities across Lagos Nigeria, that
          will scout and train brilliant minds in these communities for the
          numerious TECH Opportunities scattered across the Country/World.
        </SubText>
        <br />
        <Image src={pix} />
        <br />
        <br />
        <br />
        <TopText fs>
          Our Core <span>Process</span>.
        </TopText>
        <SubText>
          Because every student is distinct, there’s no one-size-fits-all
          process, however, we have narrowed down all of our teaching process to
          perfectly fit for every student, this has made us create great talents
          over the years.
        </SubText>
        <br />
        <br />
        <HolderView
          title="Skill"
          title2="SOFT"
          desc="Softskills are collections of productive personality that characterizes ones relationship in a social environment. you will learn softskills such as critical thinking, problem solving , public speaking, teamwork, leadership, professional attitude, work ethics and you will learn these skill by implementation"
          // desc2="In this program, you will gain hands-on experience with cloud platforms, understand how cloud resources are allocated and paid for and learn how to shorten the systems development life-cycle."
          pix={pix1}
          f
        />
        <br />
        <br />
        <HolderView
          title="Engineering"
          title2="FRONTEND"
          desc="Frontend Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages. "
          desc2="You will be exposed to best practices while executing projects with guidance from some of our faculty members comprised of top senior engineers."
          pix={pix4}
        />
        <br />
        <br />
        <HolderView
          title="Engineering"
          title2="BACKEND"
          desc="Backend engineering is an exciting career track. Like the name suggests, backend engineering deals with the part of a website or a software application that the users do not see or interact with. As a backend engineer, you are responsible for building the structure of a software application. "
          desc2="In this program, you will learn how to program servers, client-side interfaces and design databases using the various programming languages."
          pix={pix2}
          f
        />
        <br />
        <br />
        <HolderView
          title="Engineering"
          title2="Cloud"
          desc="Cloud Engineering combines software development and IT operations to build and maintain cloud infrastructure. Cloud Engineers are in high demand, as more companies continue to move critical business processes and applications to cloud infrastructures."
          desc2="In this program, you will gain hands-on experience with cloud platforms, understand how cloud resources are allocated and paid for and learn how to shorten the systems development life-cycle."
          pix={pix3}
        />
      </Wrapper>
    </Container>
  );

  function HolderView({ f, title, title2, desc, desc2, pix }) {
    return (
      <Holder f={f}>
        <TextHolder>
          <Title>
            <span>{title2}</span> {title}
          </Title>
          <TextView>{desc}</TextView>
          <br />
          <TextView>{desc2}</TextView>
        </TextHolder>

        <ImageCheck>
          <BG />
          <ImageHold src={pix} />
        </ImageCheck>
      </Holder>
    );
  }
};

export default ConnectPage;

const BG = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    height: 400px;
    margin: 0;
  }
`;

const ImageHold = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media screen and (min-width: 1000px) {
    height: 400px;
    margin: 0;
  }
`;

const ImageCheck = styled.div`
  flex: 0.5;
  height: 100%;
  position: relative;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const TextView = styled.div`
  font-weight: 300;
  font-size: 15px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
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
  margin: 5px 0;

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
  width: 60%;
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
    font-size: 35px;
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
