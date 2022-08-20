import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import axios from "axios";

const socket = io("https://studentbe1.herokuapp.com");
const url = "https://studentbe1.herokuapp.com";

const VoteOurCeleb = () => {
  const [instructor, setInstructor] = useState(true);
  const [student, setStudent] = useState(false);

  const user = useSelector((state) => state.user);
  const [stateData, setStateData] = useState([]);
  const [stateDataII, setStateDataII] = useState([]);

  const [stateDataStudent, setStateDataStudent] = useState([]);
  const [stateDataStudentII, setStateDataStudentII] = useState([]);

  const resetData = async () => {
    await axios.delete(`${url}/api/voteIntructor/deleteAll`);
    await axios.delete(`${url}/api/voteStudent/deleteAll`);
  };
  const instructorVote = async (voteID) => {
    await axios.patch(`${url}/api/voteIntructor/${voteID}/${user?._id}/vote`);
  };

  const instructorUnVote = async (voteID) => {
    await axios.patch(`${url}/api/voteIntructor/${voteID}/${user?._id}/unVote`);
  };

  const studentVote = async (voteID) => {
    await axios.patch(`${url}/api/voteStudent/${voteID}/${user?._id}/vote`);
  };

  const studentUnVote = async (voteID) => {
    await axios.patch(`${url}/api/voteStudent/${voteID}/${user?._id}/unVote`);
  };

  const fetchData = async () => {
    await axios.get(`${url}/api/voteStudent/view2`).then((res) => {
      setStateData(res.data.data);
    });
  };

  const fetchDataII = async () => {
    await axios.get(`${url}/api/voteIntructor/view2`).then((res) => {
      setStateDataII(res.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchDataII();

    socket.on("instructorsData", () => {
      fetchDataII();
    });

    socket.on("instructorsVote", () => {
      fetchDataII();
    });

    socket.on("studentsData", () => {
      fetchData();
    });

    socket.on("studentsVote", () => {
      fetchData();
    });
  }, []);

  return (
    <Container>
      <Switcher>
        <Header
          bg={instructor}
          onClick={() => {
            setInstructor(true);
            setStudent(false);
          }}
        >
          Vote Instructor
        </Header>
        <Header
          bg={student}
          onClick={() => {
            setInstructor(false);
            setStudent(true);
          }}
        >
          Vote Student
        </Header>
        {user.admin ? (
          <Header
            onClick={() => {
              resetData();
              window.location.reload();
            }}
          >
            Reset DataBase
          </Header>
        ) : null}
      </Switcher>

      <Wrapper>
        {student ? (
          <Wrapper>
            {stateData?.map((props) => (
              <Card>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Student of the Week</Position>

                <WrapHolder>
                  <Wrap>
                    <Position tt>Total Vote: {props.user.length}</Position>

                    <div>
                      {props.user.includes(user._id) ? (
                        <Vote
                          onClick={() => {
                            studentUnVote(props._id);
                          }}
                        >
                          <AiFillLike style={{ color: "darkorange" }} />
                        </Vote>
                      ) : (
                        <Vote
                          onClick={() => {
                            studentVote(props._id);
                          }}
                        >
                          <AiFillDislike />
                        </Vote>
                      )}
                    </div>
                  </Wrap>
                </WrapHolder>
              </Card>
            ))}
          </Wrapper>
        ) : instructor ? (
          <Wrapper>
            {stateDataII?.map((props) => (
              <Card>
                <Image src={props.image} />
                <Title>{props.name}</Title>
                <Position>Best Instructor of the Week</Position>

                <WrapHolder>
                  <Wrap>
                    <Position tt>Total Vote: {props.user.length}</Position>

                    <div>
                      {props.user.includes(user._id) ? (
                        <Vote
                          onClick={() => {
                            instructorUnVote(props._id);
                          }}
                        >
                          <AiFillLike style={{ color: "darkorange" }} />
                        </Vote>
                      ) : (
                        <Vote
                          onClick={() => {
                            instructorVote(props._id);
                          }}
                        >
                          <AiFillDislike />
                        </Vote>
                      )}
                    </div>
                  </Wrap>
                </WrapHolder>
              </Card>
            ))}
          </Wrapper>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default VoteOurCeleb;

const Vote = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 550ms;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const WrapHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
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
  margin-top: 30px;
  min-height: 300px;
`;

const Header = styled.div`
  text-align: center;
  padding: 10px 20px;
  background-color: ${({ bg }) => (bg ? "darkorange" : "transperent")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  border: ${({ bg }) => (bg ? "2px solid darkorange" : "2px solid black")};
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
  line-height: 1;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    font-size: 12px;
  }
`;
const Switcher = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
