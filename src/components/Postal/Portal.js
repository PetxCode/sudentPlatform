import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OurStacks from "../Landing/OurStacks";
import pix from "./6.jpg";
import pix1 from "./logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import PortalInterest from "./PortalInterest";
import SoftwareCourse from "./SettingsInfo/SoftwarePortal";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import isOnline from "is-online";
import DoorDashFavorite from "./NetworkLoading";
import { AiFillCloseSquare } from "react-icons/ai";

const url = "https://student-be.onrender.com";

const socket = io("https://student-be.onrender.com");

const Portal = () => {
  const user = useSelector((state) => state.user);
  const [stateData, setStateData] = useState([]);

  const [loading, setLoading] = useState();

  const fetchData = async () => {
    await axios.get(`${url}/api/user`).then((res) => {
      setStateData(res.data.data);
    });
  };

  const deleteData = async (id) => {
    await axios.get(`${url}/api/user/${id}`).then((res) => {
      setStateData(res.data.data);
    });
  };

  const onlineUser = async () => {
    if (isOnline) {
      await axios.patch(`${url}/api/user/${user?._id}/online`);
    } else {
      await axios.patch(`${url}/api/user/${user?._id}/offline`);
    }
  };

  useEffect(() => {
    onlineUser();
    fetchData();

    socket.on("online", (online) => {
      fetchData();
    });
  }, [navigator.onLine]);

  return (
    <Container>
      <Wrapper>
        <Text>Our Present Students</Text>

        {stateData ? null : (
          <div>
            <DoorDashFavorite />
          </div>
        )}
        {stateData.userName}
        <Students>
          {stateData &&
            stateData?.map((props, i) => (
              <Card to={`/detail/${props._id}`} key={props._id}>
                <ImageHolder>
                  {/* <Divaa
                    onClick={() => {
                      deleteData(props._id);
                    }}
                  >
                    <AiFillCloseSquare />
                  </Divaa> */}
                  {props.online && props.online ? <OnlineDot /> : <Dot />}

                  {props.avatar ? (
                    <Image src={props.avatar} />
                  ) : (
                    <Image src={pix1} />
                  )}
                </ImageHolder>
                <Name>{props.userName}</Name>
                <NewText>Top 3 Soft Skill Learnt:</NewText>
                {props.interest ? (
                  <PortalInterest key={props._id} props={props} bg="#EFF6FF" />
                ) : (
                  <div>no</div>
                )}
                <NewText>Top 3 Technical Skill Learnt:</NewText>
                <Interest>
                  <SoftwareCourse key={props._id} props={props} bg="#EFFFF3" />
                </Interest>
                <NewText>My Sponsor(s):</NewText>
                <Interest>
                  <Interested bg="#FFFAEF">{props?.sponor}</Interested>
                </Interest>
              </Card>
            ))}
        </Students>

        <OurStacks />
      </Wrapper>
    </Container>
  );
};

export default Portal;

const Divaa = styled.div`
  position: absolute;
  color: red;
  transition: all 350ms;

  :hover {
    cursor: cell;
    transform: scale(1.04);
  }
`;

const ImageHolder = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
`;

const OnlineDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #57b642;
  position: absolute;
  right: 5px;
  bottom: -8px;
  border: 1px solid white;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  position: absolute;
  right: 5px;
  bottom: -8px;
  border: 1px solid white;
`;

const NewText = styled.div`
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin-left: -10px;
  font-weight: 600;
`;
const Interested = styled.div`
  text-transform: capitalize;
  padding: 5px 10px;
  background: ${({ bg }) => bg};
  color: black;
  border-radius: 20px;
  font-size: 10px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Interest = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 5px;
`;

const Name = styled.div`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  flex: 1;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
`;

const Card = styled(Link)`
  text-decoration: none;
  color: black;
  width: 250px;
  min-height: 350px;
  border-radius: 15px 15px 0 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 10px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Students = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
`;

const Wrapper = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
