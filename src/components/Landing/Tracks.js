import React from "react";
import styled from "styled-components";

const Tracks = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Text>See how we can help you.</Text>
          <Sub>What do you want to achieve?</Sub>
        </Top>

        <Bottom>
          <NewCard
            title="FrontEnd Track (Desktop/Mobile/Web)"
            desc="Increase the value of your business with technology."
            bg="/assets/11.jpg"
            bg1="rgb(137, 45, 142, .8)"
          />
          <NewCard
            title="BackEnd Track"
            desc="Increase the value of your business with technology."
            bg="/assets/12.jpg"
            bg1="rgba(0, 0, 0, 0.7)"
          />
          <NewCard
            title="AI/ML Track"
            desc="Increase the value of your business with technology."
            bg="/assets/dis3.jpg"
            bg1="rgb(214, 96, 169, 0.8)"
          />
          <NewCard
            title="Algorithm/Data Structure Track"
            desc="Increase the value of your business with technology."
            bg="/assets/13.jpg"
            bg1="rgba(147, 115, 32, 0.8)"
          />
          <NewCard
            title="Web RTC Track"
            desc="Increase the value of your business with technology."
            bg="/assets/14.jpg"
            bg1="rgb(147, 47, 32, .8)"
          />
          <NewCard
            title="Transformational Leadership Track"
            desc="Increase the value of your business with technology."
            bg="/assets/p.jpg"
            bg1="rgb(61, 32, 147, 0.8)"
          />
          <NewCard
            title="Design Thinking Track"
            desc="Increase the value of your business with technology."
            bg="/assets/3q.jpg"
            bg1="rgb(147, 32, 82, .8)"
          />
          <NewCard
            title="UI/UX Track"
            desc="Increase the value of your business with technology."
            bg="/assets/1e.jpg"
            bg1="rgb(16, 79, 19, .8)"
          />
        </Bottom>
      </Wrapper>
    </Container>
  );

  function NewCard({ title, desc, bg, bg1 }) {
    return (
      <Card bg={bg}>
        <Holder>
          <Title>{title}</Title>
          <Description>{desc}</Description>
          <Know>
            <Button>Know More</Button>
          </Know>
        </Holder>
        <BG bg={bg1} />
      </Card>
    );
  }
};

export default Tracks;

const Button = styled.div`
  margin-bottom: 40px;
  border: 1px solid silver;
  padding: 20px 40px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Know = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Description = styled.div`
  margin-top: 30px;
  font-weight: 200;
  font-size: 20px;
`;

const Title = styled.div`
  padding-top: 50px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 500;
`;

const Holder = styled.div`
  z-index: 1;
  position: absolute;
  width: 80%;
  margin-left: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BG = styled.div`
  position: absolute;
  background: ${({ bg }) => bg};
  width: 100%;
  height: 100%;
  top: 0;
`;

const Card = styled.div`
  margin: 10px;
  color: white;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

const Sub = styled.div``;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 60px;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 96%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  color: black;
`;

function undefined({}) {
  return (
    <Card>
      <Holder>
        <Title>CodeLab Track</Title>
        <Description>
          Increase the value of your business with technology.
        </Description>
        <Know>
          <Button>Know More</Button>
        </Know>
      </Holder>
      <BG />
    </Card>
  );
}
