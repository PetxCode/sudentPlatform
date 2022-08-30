import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const StatScreen = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [myStatData, setMyStatStat] = useState({});

  const fetchStat = async (id) => {
    await axios.get(`${url}/api/stat/${id}`).then((res) => {
      setMyStatStat(res.data.data);
    });
  };

  useEffect(() => {
    fetchStat(id);

    socket.on("stat", (newData) => {
      fetchStat(id);
    });

    console.log("stat data: ", myStatData);
  }, [myStatData]);

  return (
    <Container>
      <Div>Weekly Performance</Div>
      <Wrapper>
        <Wrap>
          <View>
            {myStatData?.stat?.map((props, i) => (
              <Holder key={props._id}>
                <Diva>Week {i + 5} </Diva>
                <Row>
                  <Chart1 h={`${props.sum * 40}px`} c="#D61C4E" />
                </Row>
              </Holder>
            ))}
          </View>
        </Wrap>
      </Wrapper>

      <Div>Individual Course Performance</Div>
      <Data>
        <Arrange>
          <Title>JavaScript</Title>
          <Box bg="#89CFFD" />
        </Arrange>
        <Arrange>
          <Title>HTML/CSS</Title>
          <Box bg="#FBDF07" />
        </Arrange>
        <Arrange>
          <Title>UI/UX</Title>
          <Box bg="#FF7F3F" />
        </Arrange>
        <Arrange>
          <Title>Design Thinking</Title>
          <Box bg="#F94892" />
        </Arrange>
        <Arrange>
          <Title>Project Management</Title>
          <Box bg="#781C68" />
        </Arrange>
        <Arrange>
          <Title>Transformational Leadership</Title>
          <Box bg="#319DA0" />
        </Arrange>
      </Data>
      <Wrapper>
        <Wrap>
          <View>
            {myStatData?.stat?.map((props, i) => (
              <Holder key={props._id}>
                <Diva>Week {i + 5} </Diva>
                <Row>
                  <Chart h={`${props.rate * 40}px`} c="#89CFFD" />
                  <Chart h={`${props.rate1 * 40}px`} c="#FBDF07" />
                  <Chart h={`${props.rate2 * 40}px`} c="#FF7F3F" />
                  <Chart h={`${props.rate3 * 40}px`} c="#F94892" />
                  <Chart h={`${props.rate4 * 40}px`} c="#781C68" />
                  <Chart h={`${props.rate5 * 40}px`} c="#319DA0" />
                </Row>
              </Holder>
            ))}
          </View>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default StatScreen;

const Diva = styled.div`
  font-weight: 700;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 5px;
`;

const Arrange = styled.div`
  display: flex;
  align-items: center;
  height: 10px;

  margin: 5px 10px;
`;

const Box = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ bg }) => bg};
`;

const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Chart1 = styled.div`
  width: 20px;
  height: ${({ h }) => h};
  background-color: ${({ c }) => c};
`;

const Chart = styled.div`
  width: 10px;
  height: ${({ h }) => h};
  background-color: ${({ c }) => c};
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 250px;
  justify-content: baseline;
  align-items: center;
  margin: 0 10px;
`;

const View = styled.div`
  /* background: yellow; */
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
`;
const Wrap = styled.div`
  width: 90%;
  justify-content: flex-start;
  display: flex;
  border-radius: 5px;
  border: 1px solid silver;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
