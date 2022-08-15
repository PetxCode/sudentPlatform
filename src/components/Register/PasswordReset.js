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

const url = "https://studentbe1.herokuapp.com";

const PasswordReset = () => {
  const { id, token } = useParams();

  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const yupSchema = yup.object({
    password: yup.string().required("Field must be filled"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password doesn't match"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("data: ", data);
    const { password } = data;
    console.log("password-data: ", password);

    setLoading(true);
    await axios
      .post(`${url}/api/user/change/${id}/${token}`, {
        password,
      })
      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password changed, you can now sign-in",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/signin");
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
      <Wrapper>
        <Card>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Image src={logo} />

            <InputHolder>
              <Blocker>Enter Password</Blocker>
              <Input placeholder="Enter Password" {...register("password")} />
            </InputHolder>
            <Error>{errors.password?.message}</Error>

            <InputHolder>
              <Blocker>Enter Confirm</Blocker>
              <Input placeholder="Enter Confirm" {...register("confirm")} />
            </InputHolder>
            <Error>{errors.confirm?.message}</Error>

            <br />
            <Button type="submit">Accept New Password</Button>
            <br />
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PasswordReset;

const TextHolderFile = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  width: 100%;
  margin-right: 15px;
  /* margin-top: 15px; */
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
  margin-right: 20px;
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
`;

const Card = styled.div`
  width: 380px;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;
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
`;
