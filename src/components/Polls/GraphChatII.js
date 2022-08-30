import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import axios from "axios";
import InfoProps from "../Postal/InfoProps";
const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const GraphChatII = () => {
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
      <Wrapper>
        {sortedDataII?.map((props) => (
          <Holder key={props._id}>
            <Name>{props.name.split(" ")[0]}</Name>
            <Hold>
              <Bar w={`${props.voter * 10}px`} />
            </Hold>
          </Holder>
        ))}
      </Wrapper>
    </Container>
  );
};

export default GraphChatII;

const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Name = styled.div`
  margin-right: 5px;
  width: 170px;
  display: flex;
  justify-content: flex-start;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin-left: 20px;
`;

const Bar = styled.div`
  width: ${({ w }) => w};
  background-color: #004080;
  height: 5px;
  margin: 5px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
`;
