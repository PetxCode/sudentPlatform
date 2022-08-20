import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Powered from "../Landing/Powered";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import LoadingState from "../LoadingState";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import moment from "moment";

const socket = io("https://studentbe1.herokuapp.com");
const url = "https://studentbe1.herokuapp.com";

const GallaryScreen = () => {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    await axios.get(`${url}/api/picture`).then((res) => {
      setUserData(res.data.data);
      console.log(userData);
    });
  };

  const deleteUserData = async (id) => {
    setLoading(true);
    await axios
      .delete(`${url}/api/picture/${id}`)

      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your image has been Deleted successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          //   navigate("/portal");
        });
        setLoading(false);
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please check and fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  };

  useEffect(() => {
    getUserData();

    socket.on("delete", () => {
      getUserData();
    });
  }, []);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Space />

      <center>
        <Hr>Moment worth Sharing</Hr>
      </center>

      <Wrapper>
        {userData?.map((props) => (
          <div>
            <Card key={props._id}>
              {user.admin ? (
                <Icon
                  onClick={() => {
                    deleteUserData(props._id);
                    console.log("Click");
                  }}
                />
              ) : null}

              <Image src={props.image} />
            </Card>
            <DivaBest>{props.title}</DivaBest>
            <DivaBest bg="5px">
              {moment(props.createdAt).format("MMMM Do YYYY | h:mm:ss a")}
            </DivaBest>
          </div>
        ))}
      </Wrapper>
      <Powered />
    </Container>
  );
};

export default GallaryScreen;

const DivaBest = styled.div`
  text-align: center;
  font-size: 10px;
  margin-bottom: ${({ bg }) => bg};
  font-weight: 700;
  text-transform: uppercase;
  color: #004080;

  @media screen and (max-width: 600px) {
    font-size: 7px;
  }
`;

const Icon = styled(AiFillCloseCircle)`
  font-size: 20px;
  position: absolute;
  color: red;
`;

const Hr = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Space = styled.div`
  margin-top: 70px;
`;

const SliderSide = styled(Slider)`
  width: 70%;
  margin: 10px;
`;

const Diva = styled.div`
  width: 300px;
  background-color: red;
  margin: 20px;
`;

const Wrapper1 = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  font-size: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 250px;
  height: 200px;
  margin: 5px;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 70px;
  min-height: 40vh;
`;
