import React from "react";
import styled from "styled-components";

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Button bg="darkorange">Update Avatar</Button>
          <Button bg="#09386d">Update Personal Info</Button>
          <Button bg="#55a350">Update Project</Button>
          <Button bg="#55a350">Update Course Interest</Button>
          <Button bg="#55a350">Update Most used Software</Button>
          <Button bg="#55a350">Add recent Project </Button>
        </Holder>
      </Wrapper>{" "}
    </Container>
  );
};
// ? "#55a350" : "#09386d")
export default Settings;

const Button = styled.div`
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  /* width: 200px; */
  background-color: ${({ bg }) => bg};
  font-size: 15px;
  text-transform: uppercase;
  /* font-weight: 900; */
  transition: all 350ms;
  /* margin: 0 5px; */
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Holder = styled.div`
  width: 200px;
  /* margin-top: 50px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid silver;
  height: 90vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 70px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url("/assets/bbg.svg");
  /* background-position: center; */
  color: black;
  background-repeat: no-repeat;
  background-size: cover;
`;
