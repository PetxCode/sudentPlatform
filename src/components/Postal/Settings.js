import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import PersonalInfo from "./SettingsInfo/PersonalInfo";
import { useSelector } from "react-redux";
import AvatarScreen from "./SettingsInfo/AvatarScreen";
import InterestedCourse from "./SettingsInfo/InterestScreen";
import EnterSoftware from "./SettingsInfo/EnterSoftware";
import EnterProject from "./SettingsInfo/EnterProject";
import LearningScreen from "./SettingsInfo/LearningScreen";

const url = "https://studentbe1.herokuapp.com";

const Settings = () => {
  const user = useSelector((state) => state.user);

  const [personal, setPersonal] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [project, setProject] = useState(false);
  const [interest, setInterest] = useState(false);
  const [software, setSoftware] = useState(false);
  const [assign, setAssign] = useState(true);

  return (
    <Container>
      <Wrapper>
        <Holder>
          <TextCode>Your Secret: {user.secret}</TextCode>
          <Button
            bg={assign ? "darkorange" : "#09386d"}
            onClick={() => {
              setAssign(true);
              setAvatar(false);
              setPersonal(false);
              setProject(false);
              setInterest(false);
              setSoftware(false);
            }}
          >
            Update your Learnings
          </Button>
          <Button
            bg={avatar ? "darkorange" : "#09386d"}
            onClick={() => {
              setAvatar(true);
              setAssign(false);
              setPersonal(false);
              setProject(false);
              setInterest(false);
              setSoftware(false);
            }}
          >
            Update Avatar
          </Button>
          <Button
            bg={personal ? "darkorange" : "#09386d"}
            onClick={() => {
              setAvatar(false);
              setAssign(false);
              setPersonal(true);
              setProject(false);
              setInterest(false);
              setSoftware(false);
            }}
          >
            Update Personal Info
          </Button>
          <Button
            bg={project ? "darkorange" : "#09386d"}
            onClick={() => {
              setAvatar(false);
              setPersonal(false);
              setAssign(false);
              setProject(true);
              setInterest(false);
              setSoftware(false);
            }}
          >
            Update Project
          </Button>
          <Button
            bg={interest ? "darkorange" : "#09386d"}
            onClick={() => {
              setAvatar(false);
              setPersonal(false);
              setAssign(false);
              setProject(false);
              setInterest(true);
              setSoftware(false);
            }}
          >
            Update Course Interest
          </Button>
          <Button
            bg={software ? "darkorange" : "#09386d"}
            onClick={() => {
              setAvatar(false);
              setPersonal(false);
              setAssign(false);
              setProject(false);
              setInterest(false);
              setSoftware(true);
            }}
          >
            Update Most used Software
          </Button>
        </Holder>
        <CardWrapper>
          {avatar ? (
            <AvatarScreen />
          ) : personal ? (
            <PersonalInfo />
          ) : interest ? (
            <InterestedCourse />
          ) : software ? (
            <EnterSoftware />
          ) : project ? (
            <EnterProject />
          ) : assign ? (
            <LearningScreen />
          ) : null}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
// ? "#55a350" : "#09386d")
export default Settings;

const TextCode = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

const CardWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Card = styled.div`
  margin-top: 70px;
  width: 400px;
  min-height: 300px;
  border-radius: 5px;
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
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: 700;
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
  margin-top: -15px;
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
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 90vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-image: url("/assets/bbg.svg");
  /* background-position: center; */
  color: black;
  background-repeat: no-repeat;
  background-size: cover;
`;
