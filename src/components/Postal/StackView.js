import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://studentbe1.herokuapp.com";

const StackView = ({ props }) => {
  const [stateData, setStateData] = useState({});
  console.log("stack view: ", props);

  const fetchData = async () => {
    await axios
      .get(`${url}/api/project/${props._id}/${props._id}/stack`)
      .then((res) => {
        setStateData(res.data.data);
        console.log("stack: ", stateData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Stack>
      {stateData.stack?.map((props, i) => (
        <StackFile>{props.title}</StackFile>
      ))}
    </Stack>
  );
};

export default StackView;

const StackFile = styled.div`
  padding: 5px 10px;
  background-color: darkorange;
  color: white;
  border-radius: 30px;
  font-size: 11px;
  letter-spacing: 1.5px;
  margin: 5px;
`;
const Stack = styled.div`
  width: 170px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;
