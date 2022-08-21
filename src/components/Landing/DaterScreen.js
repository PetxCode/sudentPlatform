import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { io } from "socket.io-client";
import axios from "axios";
import InfoProps from "../Postal/InfoProps";

const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const DaterScreen = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [jan, setJan] = useState(true);
  const [feb, setFeb] = useState(false);
  const [mar, setMar] = useState(false);
  const [apr, setApr] = useState(false);
  const [may, setMay] = useState(false);
  const [jun, setJun] = useState(false);
  const [jul, setJul] = useState(false);
  const [aug, setAug] = useState(false);
  const [sept, setSept] = useState(false);
  const [oct, setOct] = useState(false);
  const [nov, setNov] = useState(false);
  const [dec, setDec] = useState(false);

  const [holderData, setHolderData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`${url}/api/event/`)
      .then((res) => {
        setHolderData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <br />

      <CardHolder>
        <Div>Event for this Month</Div>
      </CardHolder>

      <Wrap>
        <View>
          {holderData?.map((props) => (
            <Card key={props._id}>
              <Top>
                <Icon />
                <Line />
              </Top>
              <Out>
                <Day>
                  {props.date} {props.month} {props.year} - {props.time}
                </Day>
                <Hold>
                  <NewLine />
                  <Title>{props.title}</Title>
                </Hold>
                <Desc>{props.desc}</Desc>
              </Out>
            </Card>
          ))}
        </View>
      </Wrap>
    </Container>
  );
};

{
}
export default DaterScreen;

const View = styled.div`
  /* background: yellow; */
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
`;
const Wrap = styled.div`
  width: 90%;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid silver;
`;

const Desc = styled.div`
  font-weight: 600;
  line-height: 1.2;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Title = styled.div`
  font-weight: 700;
`;

const NewLine = styled.div`
  width: 30px;
  height: 7px;
  background: darkorange;
  margin-right: 10px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Out = styled.div`
  margin-left: 30px;
`;

const Day = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`;

const DateCall = styled.div``;

const Line = styled.div`
  width: 170px;
  height: 7px;
  background: darkorange;
  position: absolute;
  bottom: 0;
`;

const Icon = styled(BsFillCalendar2EventFill)`
  font-size: 50px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

const Div = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 40px;
  color: white;
  background: darkorange;
  border-radius: 20px;
`;

const Card = styled.div`
  margin: 10px;
  min-width: 300px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  padding: 7px 30px;
  border-radius: 20px;
  background: ${({ bg }) => (bg ? "darkorange" : "white")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px 10px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    background: ${({ bg }) => (bg ? "" : "rgba(255, 140, 0, 0.2)")};
  }
`;

const DateHolder = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  overscroll-behavior-inline: contain;
`;

const Dater = styled.div`
  width: 90%;
  min-height: 150px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;
