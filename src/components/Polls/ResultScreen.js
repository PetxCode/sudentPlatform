import React, { useEffect, useState } from "react";
import styled from "styled-components";
import p from "./p.jpg";
import { io } from "socket.io-client";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const ResultScreen = () => {
  const user = useSelector((state) => state.user);
  const [stateData, setStateData] = useState([]);
  const [stateDataII, setStateDataII] = useState([]);

  const fetchData = async () => {
    await axios.get(`${url}/api/voteStudent`).then((res) => {
      setStateData(res.data.data);
    });
  };

  const fetchDataII = async () => {
    await axios.get(`${url}/api/voteIntructor`).then((res) => {
      setStateDataII(res.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchDataII();

    socket.on("instructorsData", () => {
      fetchDataII();
    });

    socket.on("studentsData", () => {
      fetchData();
    });
  }, []);

  return (
    <Container>
      <MainTitle>Our Celebrities of the Week</MainTitle>

      <Wrapper>
        {stateDataII?.map((props) => (
          <Card>
            <Image src={props.image} />
            <Title>{props.name}</Title>
            <Position>Best Instructor of the Week</Position>
            <Position tt>{props.course}</Position>
          </Card>
        ))}

        {stateData?.map((props) => (
          <Card>
            <Image src={props.image} />
            <Title>{props.name}</Title>
            <Position>Best Student of the Week</Position>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ResultScreen;

const MainTitle = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Position = styled.div`
  font-weight: ${({ tt }) => (tt ? "700" : "500")};
  color: #004080;
  text-align: center;
  font-size: 12px;
  text-transform: ${({ tt }) => (tt ? "uppercase" : "normal")};
`;

const Title = styled.div`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #004080;
`;

const Card = styled.div`
  margin: 10px;
  width: 300px;
  min-height: 300px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
