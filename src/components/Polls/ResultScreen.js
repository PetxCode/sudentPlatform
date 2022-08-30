import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import axios from "axios";
import GraphChat from "./GraphChat";
import GraphChatII from "./GraphChatII";

const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const ResultScreen = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sortedDataII, setSortedDataII] = useState([]);

  const sortData = (props) => {
    return (a, b) => {
      if (a[props] > b[props]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  const fetchData = async () => {
    await axios.get(`${url}/api/voteStudent/viewAll`).then((res) => {
      setSortedData(res.data.data.sort(sortData("voter")));
    });
  };

  const fetchDataII = async () => {
    await axios.get(`${url}/api/voteIntructor/viewAll`).then((res) => {
      setSortedDataII(res.data.data.sort(sortData("voter")));
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

    socket.on("studentsVote", () => {
      fetchData();
    });

    socket.on("instructorsVote", () => {
      fetchDataII();
    });
  }, []);

  return (
    <Container>
      <MainTitle>Our Celebrities of the Week</MainTitle>

      <Wrapper>
        {sortedDataII?.map((props, i) => (
          <div key={props._id}>
            {i < 1 ? (
              <Card key={props._id}>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Instructor of the Week</Position>
                <Position tt>{props.course}</Position> <br />
                <Position>
                  <span>Instructor's Voting Result</span>
                  <Br />
                  <GraphChatII />
                </Position>
              </Card>
            ) : null}
          </div>
        ))}

        {sortedData?.map((props, i) => (
          <div key={props._id}>
            {i < 1 ? (
              <Card key={props._id}>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Student of the Week</Position>
                <br />
                <Position>
                  <span>Student's Voting Result </span>
                  <Br />
                  <GraphChat />
                </Position>
              </Card>
            ) : null}
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ResultScreen;

const Br = styled.div`
  margin-bottom: 5px;
`;

const MainTitle = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 1.1;
    width: 90%;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: ${({ tt }) => (tt ? "uppercase" : "normal")};

  span {
    color: red;
    font-weight: 700;
    font-size: 12px;
  }
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
