import React from "react";
import styled from "styled-components";
import OurStacks from "../Landing/OurStacks";
import pix from "./6.jpg";

const Portal = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Present Students</Text>

        <Students>
          <Card>
            <Dot />
            <Image src={pix} />
            <Name>Peter Oti</Name>

            <NewText>Choice Interest Area:</NewText>
            <Interest>
              <Interested bg="#EFFFF3">FullStack</Interested>
              <Interested bg="#EFF6FF">BackEnd</Interested>
              <Interested bg="#FFFAEF">FrontEnd</Interested>
            </Interest>

            <NewText>Most preferred Software:</NewText>
            <Interest>
              <Interested bg="#EFFFF3">Miro</Interested>
              <Interested bg="#EFF6FF">SocketIO</Interested>
              <Interested bg="#FFFAEF">VScode</Interested>
            </Interest>
          </Card>
        </Students>

        <OurStacks />
      </Wrapper>
    </Container>
  );
};

export default Portal;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  position: absolute;
  right: 5px;
  bottom: 163px;
  border: 1px solid white;
`;

const NewText = styled.div`
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin-left: -10px;
  font-weight: 600;
`;
const Interested = styled.div`
  text-transform: capitalize;
  padding: 5px 10px;
  background: ${({ bg }) => bg};
  color: black;
  border-radius: 20px;
  font-size: 10px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Interest = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 5px;
`;

const Name = styled.div`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  flex: 1;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const Card = styled.div`
  width: 250px;
  min-height: 350px;
  border-radius: 15px 15px 0 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 10px;
`;

const Students = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.div``;

const Wrapper = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
