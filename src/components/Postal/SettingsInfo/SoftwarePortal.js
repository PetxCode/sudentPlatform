import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://studentbe1.herokuapp.com";

const SoftwarePortal = ({ props, bg, color }) => {
  const user = useSelector((state) => state.user);
  const [stateData, setStateData] = useState({});

  const fetchData = async () => {
    await axios.get(`${url}/api/software/${props._id}/limit`).then((res) => {
      setStateData(res.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [props._id]);
  return (
    <div>
      <Interest>
        {stateData?.software?.map((props) => (
          <Interested bg={bg} color={color} key={props._id}>
            {props.title}
          </Interested>
        ))}
      </Interest>
    </div>
  );
};

export default SoftwarePortal;

const Interested = styled.div`
  text-transform: capitalize;
  padding: 5px 10px;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
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
