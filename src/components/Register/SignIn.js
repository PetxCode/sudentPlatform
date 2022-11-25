import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";
import LoadingState from "../LoadingState";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createUser } from "../State/GlobalState";

const url = "https://student-be.onrender.com";

const SignIn = () => {
  const { id, token } = useParams();
  const dispatch = useDispatch();

  console.log(id, token);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const yupSchema = yup.object({
    email: yup.string().email().required("Field must be filled"),
    password: yup.string().required("Field must be filled"),
    secret: yup.string().required("Field must be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    setLoading(true);
    await axios
      .post(`${url}/api/user/signin`, data)
      .then((res) => {
        dispatch(createUser(res.data.data));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome Back on board",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
          window.location.reload();
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

  useEffect(() => {
    if (id && token) {
      axios.get(`${url}/api/user/${id}/${token}`);
    }
  }, []);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <NewCard>
        <Card>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Image src={logo} />

            <InputHolder>
              <Blocker>Enter Your Secret</Blocker>
              <Input placeholder="Enter Your Secret" {...register("secret")} />
            </InputHolder>

            <Error>{errors.secret?.message}</Error>
            <InputHolder>
              <Blocker>Enter Email</Blocker>
              <Input placeholder="Enter Email" {...register("email")} />
            </InputHolder>
            <Error>{errors.email?.message}</Error>

            <InputHolder>
              <Blocker>Enter Password</Blocker>
              <Input
                type="password"
                placeholder="Enter Password"
                {...register("password")}
              />
            </InputHolder>
            <Error>{errors.password?.message}</Error>
            <TextHolderFile>
              Can't remember your PASSWORD <Nav to="/reset">Reset it here</Nav>
            </TextHolderFile>
            <br />
            <Button type="submit">Sign in</Button>
            <br />
            <Text>
              Don't have an Account
              <Span to="/register">Register</Span> Here
            </Text>
          </Form>
        </Card>
      </NewCard>
    </Container>
  );
};

export default SignIn;

const NewCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 600px;
  min-height: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0;
  }
`;
const TextHolderFile = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  width: 100%;
  margin-right: 15px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 5px;
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
  margin-top: -10px;
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

const TextStart = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #004080;
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
  font-size: 12px;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 80%;
  height: 45px;
  margin-left: -20px;
  /* padding: 10px 50px; */
  background-color: #004080;
  font-family: Poppins;
  outline: none;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 3px;
  margin-top: 15px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 15px;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 380px;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;

  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/bg.svg");
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
