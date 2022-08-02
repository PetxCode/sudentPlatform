import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Card></Card>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Card = styled.div`
  width: 500px;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/bg.svg");
`;
