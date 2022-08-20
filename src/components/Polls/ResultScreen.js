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
  const [sortedData, setSortedData] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [displayedII, setDisplayedII] = useState([]);
  const [sortedDataII, setSortedDataII] = useState([]);

  const fetchData = async () => {
    await axios.get(`${url}/api/voteStudent/viewAll`).then((res) => {
      setStateData(res.data.data);
    });
  };

  const fetchDataII = async () => {
    await axios.get(`${url}/api/voteIntructor/viewAll`).then((res) => {
      setStateDataII(res.data.data);
    });
  };

  const sortData = (props) => {
    return (a, b) => {
      if (a[props] > b[props]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  const displayedInstructorData = () => {
    stateDataII.forEach((el) => {
      const pass = { ...el, voter: el.user.length };
      return displayedII.push(pass);
    });
    setSortedData(displayedII.sort(sortData("voter")));
  };

  const displayedStudentData = () => {
    stateData.forEach((el) => {
      const pass = { ...el, voter: el.user.length };
      return displayed.push(pass);
    });
    setSortedDataII(displayed.sort(sortData("voter")));
  };

  const TestCase = () => {
    stateData.forEach((el) => {
      const pass = { ...el, voter: el.user.length };
      return displayed.push(pass);
    });
  };
  const TestCaseII = () => {
    stateDataII.forEach((el) => {
      const pass = { ...el, voter: el.user.length };
      return displayedII.push(pass);
    });
  };

  useEffect(() => {
    fetchData();
    fetchDataII();

    // TestCase();
    // TestCaseII();

    displayedInstructorData();
    displayedStudentData();

    socket.on("instructorsData", () => {
      displayedInstructorData();
    });

    socket.on("studentsData", () => {
      displayedStudentData();
    });

    // console.log("sorted data found: ", sortedDataII);
    // console.log("data found: ", stateData);
  }, [stateDataII, stateData]);

  return (
    <Container>
      <MainTitle>Our Celebrities of the Week</MainTitle>

      <Wrapper>
        {sortedData?.map((props, i) => (
          <div key={props._id}>
            {i < 1 ? (
              <Card key={props._id}>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Instructor of the Week</Position>
                <Position tt>{props.course}</Position> <br />
                <Position>
                  Total Votes Gotten: <span>{props.user.length}</span>
                </Position>
              </Card>
            ) : null}
          </div>
        ))}

        {sortedDataII?.map((props, i) => (
          <div key={props._id}>
            {i < 1 ? (
              <Card key={props._id}>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Student of the Week</Position>
                <br />
                <Position>
                  Total Votes gotten: <span>{props.user.length}</span>
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

  span {
    color: red;
    font-weight: 700;
    margin-left: 5px;
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
