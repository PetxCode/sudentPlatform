import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingState from "../../LoadingState";
const url = "https://student-be.onrender.com";

const PersonalInfo = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const yupSchema = yup.object({
    motivation: yup.string().required("Field must be filled"),
    promise: yup.string().required("Field must be filled"),
    sponor: yup.string().required("Field must be filled"),
    video: yup.string().required("Field must be filled"),
    futureAmbition: yup.string().required("Field must be filled"),
    aboutYou: yup.string().required("Field must be filled"),
    userName: yup.string().required("Field must be filled"),
    // experience: yup.number().required("Field must be filled"),
    phone: yup.number().required("Field must be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const [userData, setUserData] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    setLoading(true);
    await axios
      .patch(`${url}/api/user/${user._id}/update`, data)
      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been created successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/portal");
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
  });

  const getUserData = async () => {
    await axios.get(`${url}/api/user/${user._id}`).then((res) => {
      setUserData(res.data.data);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Card>
        <Form onSubmit={onSubmit}>
          <Text>Updating Personal info</Text>
          <InputHolder>
            <Blocker>FullName</Blocker>

            <Input
              placeholder="Enter Your FullName"
              defaultValue={userData.userName}
              {...register("userName")}
            />
          </InputHolder>
          <Error>{errors.userName?.message}</Error>

          <InputHolder>
            <Blocker>Enter your Sponsor</Blocker>
            <Input
              defaultValue={userData.sponor}
              placeholder="Enter Your Sponsor's Name"
              {...register("sponor")}
            />
          </InputHolder>
          <Error>{errors.sponor?.message}</Error>

          <InputHolder>
            <Blocker>Enter your Video URL</Blocker>
            <Input
              type="url"
              defaultValue={userData.video}
              placeholder="Enter your Video URL"
              {...register("video")}
            />
          </InputHolder>
          <Error>{errors.video?.message}</Error>

          <InputHolder>
            <Blocker>Phone Number</Blocker>
            <Input
              defaultValue={userData.phone}
              placeholder="Enter Your Phone Number"
              {...register("phone")}
            />
          </InputHolder>
          <Error>{errors.phone?.message}</Error>

          <InputHolder>
            <Blocker>Enter Future Ambition</Blocker>
            <InputArea
              defaultValue={userData.futureAmbition}
              placeholder="Enter Future Ambition"
              {...register("futureAmbition")}
            />
          </InputHolder>
          <Error>{errors.futureAmbition?.message}</Error>

          <InputHolder>
            <Blocker>Enter About You</Blocker>
            <InputArea
              defaultValue={userData.aboutYou}
              placeholder="Enter About You"
              {...register("aboutYou")}
            />
          </InputHolder>
          <Error>{errors.aboutYou?.message}</Error>

          <InputHolder>
            <Blocker>Motivation</Blocker>
            <InputArea
              defaultValue={userData.motivation}
              placeholder="Enter Motivation"
              {...register("motivation")}
            />
          </InputHolder>
          <Error>{errors.motivation?.message}</Error>

          <InputHolder>
            <Blocker>Your Promise</Blocker>
            <InputArea
              defaultValue={userData.promise}
              placeholder="Your Promise to Learning"
              {...register("promise")}
            />
          </InputHolder>
          <Error>{errors.promise?.message}</Error>
          <br />
          <Button type="submit" bg="darkorange">
            update my info
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default PersonalInfo;

const Container = styled.div`
  width: 70%;
  height: 100%;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const InputArea = styled.textarea`
  resize: none;
  padding-top: 10px;
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Form = styled.form`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Card = styled.div`
  margin-top: 70px;
  width: 400px;
  min-height: 300px;
  border-radius: 5px;
`;

const Span = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: #004080;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Image = styled.img`
  height: 150px;
`;
const Error = styled.p`
  margin: 0;
  color: red;
  display: flex;
  justify-content: flex-end;
  width: 80%;
  font-size: 12px;
  margin-top: -15px;
  margin-right: 5px;
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: #004080;
`;

const InputHolder = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  font-size: 15px;
  text-transform: uppercase;
  transition: all 350ms;
  margin-bottom: 20px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
