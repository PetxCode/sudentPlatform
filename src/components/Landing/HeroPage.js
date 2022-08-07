import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const url = "https://studentbe1.herokuapp.com";
const HeroPage = () => {
  const user = useSelector((state) => state.user);

  const newPatch = async () => {
    await axios.patch(`${url}/api/user/${user?._id}/online`);
  };

  useEffect(() => {
    newPatch();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Holder>
          <Top>
            Your Sure <span> Path</span> to becoming a{" "}
            <span> Global Talent!</span>
          </Top>
          <Sub>
            We Build Apps, Train Youths and Deploy Talents to join Thriving
            Company that is solving Global Issues!.
          </Sub>
        </Holder>
      </Wrapper>{" "}
    </Container>
  );
};

export default HeroPage;

const Sub = styled.div`
  font-weight: 200;
`;

const Top = styled.div`
  font-size: 70px;
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 700;
  }

  span {
    color: darkorange;
    text-transform: uppercase;
  }
`;

const Holder = styled.div`
  width: 400px;
  margin-left: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/bg.svg");
  color: white;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`;
