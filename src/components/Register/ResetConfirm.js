import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const ConfirmAccount = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Form>
            <SpanLink to="/">
              <Image src={logo} />
            </SpanLink>
            <Text>
              Thank you for creating an Account with us!
              <br />
              <br />
              Although, your account has been created but hasn't been verified,
              go to your mail to finish up your Registration.
              <br />
              <br />
              Thanks!
            </Text>
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ConfirmAccount;

const SpanLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  height: 150px;
`;

const Text = styled.div`
  display: flex;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
`;

const Card = styled.div`
  width: 400px;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;
  display: flex;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
