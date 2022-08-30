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

const url = "https://studentbe1.herokuapp.com";
// const url = "http://localhost:2400";

const LearningStat = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [builtFor, setBuiltFor] = useState("web");

  const yupSchema = yup.object({
    rating: yup.number().required("Field must be filled"),
    rating1: yup.number().required("Field must be filled"),
    rating2: yup.number().required("Field must be filled"),
    rating3: yup.number().required("Field must be filled"),
    rating4: yup.number().required("Field must be filled"),
    rating5: yup.number().required("Field must be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const [userData, setUserData] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    const { rating, rating1, rating2, rating3, rating4, rating5 } = data;

    console.log(data);
    console.log(rating + rating2);

    setLoading(true);
    await axios
      .post(`${url}/api/stat/${user._id}/create`, {
        rate: rating,
        course: "JavaScript",

        rate1: rating1,
        course1: "UI/UX",

        rate2: rating2,
        course2: "HTML/CSS",

        rate3: rating3,
        course3: "Design Thinking",

        rate4: rating4,
        course4: "Project Management",

        rate5: rating5,
        course5: "Transformational Leadership",
      })

      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Learning added to your stat",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          // navigate("/portal");
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

    reset();
  });

  const getUserData = async () => {
    await axios.get(`${url}/api/interest/${user._id}`).then((res) => {
      setUserData(res.data.data);
    });
  };

  useEffect(() => {
    getUserData();
    console.log(userData);
  }, []);

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Card>
        <Form onSubmit={onSubmit}>
          <Text>Rate your Learnings for the Week</Text>
          <InputHolder>
            <Blocker>JavaScript</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating")} />
              </Row>
            </Rower>
          </InputHolder>
          <Error>{errors.rating?.message}</Error>
          <InputHolder>
            <Blocker>HTML/CSS</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating1")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating1")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating1")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating1")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating1")} />
              </Row>
            </Rower>
          </InputHolder>{" "}
          <Error>{errors.rating1?.message}</Error>
          <InputHolder>
            <Blocker>UI/UX</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating2")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating2")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating2")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating2")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating2")} />
              </Row>
            </Rower>
          </InputHolder>{" "}
          <Error>{errors.rating2?.message}</Error>
          <InputHolder>
            <Blocker>Design Thinking</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating3")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating3")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating3")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating3")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating3")} />
              </Row>
            </Rower>
          </InputHolder>
          <Error>{errors.rating3?.message}</Error>
          <InputHolder>
            <Blocker>Transformational Leadership</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating4")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating4")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating4")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating4")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating4")} />
              </Row>
            </Rower>
          </InputHolder>
          <Error>{errors.rating4?.message}</Error>
          <InputHolder>
            <Blocker>Project Management</Blocker>
            <Rower>
              <Row>
                <RowTitle>1</RowTitle>
                <RowInput type="radio" value="1" {...register("rating5")} />
              </Row>
              <Row>
                <RowTitle>2</RowTitle>
                <RowInput type="radio" value="2" {...register("rating5")} />
              </Row>
              <Row>
                <RowTitle>3</RowTitle>
                <RowInput type="radio" value="3" {...register("rating5")} />
              </Row>
              <Row>
                <RowTitle>4</RowTitle>
                <RowInput value="4" type="radio" {...register("rating5")} />
              </Row>
              <Row>
                <RowTitle>5</RowTitle>
                <RowInput value="5" type="radio" {...register("rating5")} />
              </Row>
            </Rower>
          </InputHolder>
          <Error>{errors.rating5?.message}</Error>
          <br />
          <Button
            type="submit"
            bg="darkorange"
            onClick={() => {
              console.log("Check...!");
            }}
          >
            Record my Stat for this week
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LearningStat;

const RowInput = styled.input``;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
`;

const RowTitle = styled.div`
  font-weight: 900;
  font-size: 10px;
`;

const Rower = styled.div`
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 50px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;
  font-family: Poppins;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Option = styled.option`
  font-family: Poppins;
`;

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

const Select = styled.select`
  width: 90%;
  outline: none;
  border: 1px solid #004080;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  font-family: Poppins;
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
