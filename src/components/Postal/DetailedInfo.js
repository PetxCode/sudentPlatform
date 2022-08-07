import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img1 from "./cup.svg";
import img2 from "./cup.svg";
import arr from "./cup.svg";
import InfoProps from "./InfoProps";
import axios from "axios";

const url = "https://studentbe1.herokuapp.com";

const DetailedInfo = ({ props }) => {
  const id = props._id;
  const [myData, setMyData] = useState([]);
  const fetchDataDetail = async (id) => {
    await axios.get(`${url}/api/user/${id}`).then((res) => {
      setMyData(res.data.data);
    });
  };

  useEffect(() => {
    fetchDataDetail(id);
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <InfoProps
          img={img1}
          bg1="#F9AF2F"
          bg
          title="What Motivate me"
          text={myData.motivation}
          title2="My Ambition in 5 years"
          text2={myData.futureAmbition}
        />
      </Wrapper>
    </Container>
  );
};

export default DetailedInfo;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
