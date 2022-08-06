import React from "react";
import styled from "styled-components";

const InfoProps = ({ title2, img, text, text2, title, bg, bg1 }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <Image src={img} style={{ backgroundColor: bg1 }} />
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
        <br />
        <Title>{title2}</Title>
        <SubTitle>{text2}</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default InfoProps;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: contain;
  margin: 30px 0;
  padding: 20px;
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  width: 92%;
  margin-bottom: 10px;
  line-height: 1.2;
  @media screen and (max-width: 500px) {
    font-size: 22px;
    width: 95%;
  }
`;
const SubTitle = styled.div`
  font-size: 18px;
  margin: 0 30px;
  text-align: center;
  line-height: 1.5;
  padding-bottom: 15px;
  width: 80%;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 1.2;
    text-align: left;
    margin: 0 15px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => (bg ? "#09386D" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  @media screen and (max-width: 500px) {
    width: 100%;
    min-height: 400px;
  }
`;
const Wrapper = styled.div`
  min-width: 400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  @media screen and (max-width: 500px) {
    min-width: 80%;
    padding-bottom: 0px;
  }
`;
