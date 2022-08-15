import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Powered from "../Landing/Powered";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const url = "https://studentbe1.herokuapp.com";

const LearningScreen = () => {
  const { id } = useParams();

  const [learn, setLearn] = useState({});

  const viewLearning = async () => {
    await axios.get(`${url}/api/learning/${id}`).then((res) => {
      setLearn(res.data.data);
    });
  };
  useEffect(() => {
    viewLearning();
  }, []);

  return (
    <Container>
      <TextHolder>
        <Text>Learning Report so far!.</Text>
        <Sub>
          Here are tracks of what i've learnt so far... <br />
          These are my weekly Learning Report
        </Sub>
      </TextHolder>
      <Wrapper>
        {learn?.learning?.map((props, i) => (
          <Card key={props._id}>
            <Course>{props.course}</Course>
            <Title>{props.title}</Title>

            <SubT>Learning Description</SubT>
            <Focus>{props.desc}</Focus>
            <SubT>Learning use case</SubT>
            <Focus>{props.useCase}</Focus>
            <Space />
            <Div>
              {moment(props.createdAt).format("MMMM Do YYYY | h:mm:ss a")}
            </Div>
          </Card>
        ))}
      </Wrapper>
      <Powered />
    </Container>
  );
};

export default LearningScreen;

const Space = styled.div`
  flex: 1;
  /* margin-bottom: 10px; */
`;

const Div = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  color: #004080;
  font-weight: 700;
  margin: 10px 0;
`;

const SubT = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
`;

const Sub = styled.div`
  font-weight: 300;
  width: 60%;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
`;

const Text = styled.div`
  margin-top: 50px;
  font-weight: 700;
  font-size: 30px;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Phone = styled.img`
  width: 80%;
  height: 350px;
  object-fit: contain;
`;

const Title = styled.div`
  width: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #004080;
`;

const Course = styled.div`
  margin-top: 10px;
  font-size: 13px;
  margin-bottom: 10px;
  text-transform: capitalize;
  margin: 10px;
  background: red;
  padding: 7px 15px;
  color: white;
  border-radius: 30px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Focus = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  margin: 3px 10px;
`;

const Card = styled.div`
  width: 250px;
  min-height: 200px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 100px;
  background: #f9f9f9;
`;
