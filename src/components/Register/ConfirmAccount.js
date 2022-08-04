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

const Error = styled.p`
  margin: 0;
  color: red;
  display: flex;
  justify-content: flex-end;
  width: 80%;
  font-size: 12px;
  margin-top: -10px;
  margin-right: 5px;
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: #004080;
`;

const InputHolder = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const TextStart = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #004080;
`;

const Span = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: #004080;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Button = styled.button`
  width: 80%;
  height: 45px;
  margin-left: -20px;
  /* padding: 10px 50px; */
  background-color: #004080;
  font-family: Poppins;
  outline: none;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 3px;
  margin-top: 15px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
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
