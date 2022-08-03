import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "./studentData.json";
import HireProps from "./HireProps";
import HireTop from "./HireTop";
import img1 from "./assets/cup.svg";
import { AiFillHome, AiFillAppstore, AiFillContacts } from "react-icons/ai";
import { MdContactless } from "react-icons/md";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import arr from "./assets/arr.png";
import { app } from "./../../base";

const StudentDetail = () => {
  const { id } = useParams();
  const [myData, setMyData] = React.useState([]);

  const fetchDataDetail = async (id) => {
    await app
      .firestore()
      .collection("hire")
      .doc(id)
      .get()
      .then((file) => {
        setMyData(file.data());
        console.log("firebase data: ", myData);
      });
  };

  React.useEffect(() => {
    fetchDataDetail(id);
  }, []);

  console.log(myData);
  return (
    <Container>
      <Wrapper>
        <Info>{myData?.firstName}'s Detail Page</Info>
        {/* <HireProps /> */}
        <HireTop
          bg
          img={img1}
          bg1="#F9AF2F"
          title="Work With the Best"
          text="The most brilliant minds in React engineering are choosen from a vetted and rigoius process here at CodeLab. And with good reason. Our meticulous vetting process proves that we are serious about drawing in only the best talent and ascertaining the best-fit  match for your company."
          text2="
          Today, many of our successful candidates are in key leadership roles and driving the success of their front-end development strategies. Their globally diverse experiences provide the multi-angular perspective necessary for understanding complex customer workflows and designing insightful solutions adapted to specific customer requirements."
        />
        <Detail>
          <Card1>
            <Proj>Projects Done</Proj>

            {myData.projects?.map((props, i) => (
              <Holder key={i}>
                <Box>{i}</Box>
                <Cont>
                  <Name>
                    {props.name}
                    <span>({props.type})</span>
                  </Name>
                  <Abt>{props.desc}</Abt>
                  <Stack>
                    {props.tech?.map((props, i) => (
                      <StackFile key={i}>{props.title}</StackFile>
                    ))}
                  </Stack>
                  <Line />
                </Cont>
              </Holder>
            ))}
          </Card1>
          <Card2>
            <About>Why you need me in your TEAM</About>
            <Profile>{myData.desc}</Profile>

            <About>What i can do</About>
            <DetailProfile>{myData.details}</DetailProfile>
          </Card2>
          <Card3>
            <FileHolder>
              <Image
                src={
                  "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-260nw-740523562.jpg"
                }
              />
              <Label>
                <LabelTitle>First Name: </LabelTitle>
                <LabelData>{myData.firstName}</LabelData>
              </Label>
              <Label>
                <LabelTitle>Last Name: </LabelTitle>
                <LabelData>{myData.lastName}</LabelData>
              </Label>

              <Label>
                <LabelTitle>Contact:</LabelTitle>
                <LabelData>{myData.contact}</LabelData>
              </Label>

              <Label>
                <LabelTitle>Years of Experence:</LabelTitle>
                <LabelData>{myData.years}</LabelData>
              </Label>

              <Label>
                <LabelTitle>Core Skills:</LabelTitle>
                <LabelData>
                  {myData.pry?.map((props, i) => (
                    <CoreSkill key={i}>{props.skill} </CoreSkill>
                  ))}
                </LabelData>
              </Label>
              <Stake />
              <Button>
                <LogInTalk
                  href="mailto:chukwusahpeter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    {" "}
                    <MdContactless />{" "}
                  </Icon>
                  Let's Talk
                </LogInTalk>
              </Button>
            </FileHolder>
          </Card3>
        </Detail>

        <Detail2>
          <Card>
            <Card1>
              <Proj>Projects Done</Proj>

              {myData.projects?.map((props, i) => (
                <Holder key={i}>
                  <Box>{i}</Box>
                  <Cont>
                    <Name>
                      {props.name} <span>({props.type})</span>
                    </Name>
                    <Abt>{props.desc}</Abt>
                    <Stack>
                      {props.tech?.map((props, i) => (
                        <StackFile key={i}>{props.title}</StackFile>
                      ))}
                      {/* <StackFile>stack</StackFile>
                    <StackFile>stack</StackFile> */}
                    </Stack>
                    <Line />
                  </Cont>
                </Holder>
              ))}
            </Card1>
            <Card3>
              <FileHolder>
                <Image
                  src={
                    "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-260nw-740523562.jpg"
                  }
                />
                <Label>
                  <LabelTitle>First Name: </LabelTitle>
                  <LabelData>{myData.firstName}</LabelData>
                </Label>
                <Label>
                  <LabelTitle>Last Name: </LabelTitle>
                  <LabelData>{myData.lastName}</LabelData>
                </Label>

                <Label>
                  <LabelTitle>Contact:</LabelTitle>
                  <LabelData>{myData.contact}</LabelData>
                </Label>

                <Label>
                  <LabelTitle>Years of Experence:</LabelTitle>
                  <LabelData>{myData.years}</LabelData>
                </Label>

                <Label>
                  <LabelTitle>Core Skills:</LabelTitle>
                  <LabelData>
                    {myData.pry?.map((props, i) => (
                      <CoreSkill key={i}>{props.skill} </CoreSkill>
                    ))}
                  </LabelData>
                </Label>
                <Stake />
                <Button>
                  <LogIn to="/">
                    <Icon>
                      {" "}
                      <MdContactless />{" "}
                    </Icon>
                    Let's Talk
                  </LogIn>
                </Button>
              </FileHolder>
            </Card3>
          </Card>
          <Card2>
            <About>Why you need me in your TEAM</About>
            <Profile>{myData.desc}</Profile>

            <About>What i can do</About>
            <DetailProfile>{myData.details}</DetailProfile>
          </Card2>
        </Detail2>
      </Wrapper>
      <HireTop
        img={arr}
        bg1="#F9AF2F"
        // bg
        title="Join The World’s Leading Brands and Companies Working With CodeLab"
        text="Partner with us for your React.js talent needs and be in the company
        of hundreds of best-in-class corporations, institutions, and
        organizations from a diverse set of industries. Years of long-standing
        collaboration with them attest to our firm commitment to deliver
        results."
      />
    </Container>
  );
};

export default StudentDetail;

const LogInTalk = styled.a`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
  color: white;
  margin-right: 20px;
  font-family: Raleway;
  /* font-size: 20px; */
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
    background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
    box-shadow: rgb(0 0 0 / 29%) 0px 16px 10px -10px,
      rgb(0 0 0 / 23%) 0px 10px 10px -10px;
  }
  @media screen and (max-width: 600px) {
    cursor: pointer;
  }
`;

const About = styled.div`
  padding-top: 20px;
  margin: 10px 15px;
  font-size: 20px;
  font-weight: bold;
`;
const DetailProfile = styled.div`
  margin: 0 15px;
  font-size: 16px;
  line-height: 1.4;
  padding-bottom: 10px;
`;

const Profile = styled.div`
  margin: 0 15px;
  flex: 1;
  font-size: 16px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;
const Stake = styled.div`
  width: 80%;
  flex: 1;
  margin: 10px auto;
  border-top: 1px solid gray;
`;

const Icon = styled.div`
  margin-right: 7px;
  font-size: 30px;
  margin-top: 7px;
`;
const LogIn = styled(Link)`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
  color: white;
  margin-right: 20px;
  font-family: Raleway;
  /* font-size: 20px; */
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
    background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
    box-shadow: rgb(0 0 0 / 29%) 0px 16px 10px -10px,
      rgb(0 0 0 / 23%) 0px 10px 10px -10px;
  }
  @media screen and (max-width: 600px) {
    cursor: pointer;
  }
`;

const CoreSkill = styled.div`
  padding: 5px 7px;
  background-color: #55a350;
  border-radius: 20px;
  margin: 5px;
  color: white;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 1.5px;
`;

const MyIcon = styled.img`
  width: 200px;
  height: 90px;
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  /* background-color: red; */
  object-fit: cover;
  margin-bottom: 15px;
`;
const FileHolder = styled.div`
  /* background-color: green; */
  width: 100%;
  top: -50px;
  right: -80px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: flex-start;
  margin-top: 12px;
`;
const LabelTitle = styled.div`
  margin-right: 20px;
`;
const LabelData = styled.div`
  font-weight: bold;
  font-size: 17px;
  display: flex;
  flex-wrap: wrap;
`;

const Line = styled.div`
  border-top: 1px solid #b6b6b6;
  margin: 10px 0;
`;
const Proj = styled.div`
  margin: 30px;
  font-weight: 900;
  font-size: 25px;
`;
const Holder = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  margin-top: 10px;
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: #55a350;
  color: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 30px;
  margin-right: 20px;
  flex-direction: column;
  div {
    font-size: 10px;
    font-weight: normal;
  }
`;
const Cont = styled.div`
  width: 170px;
`;
const Name = styled.div`
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 5px;
  span {
    color: #09386d;
    margin-left: 5px;
  }
`;
const Abt = styled.div`
  margin-right: 10px;
  width: 170px;
  margin: 10px 0;
`;
const StackFile = styled.div`
  padding: 5px 10px;
  background-color: #09386d;
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
`;

const Card = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-direction: column-reverse;
  @media screen and (max-width: 1000px) {
    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Detail2 = styled.div`
  display: none;
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const Card1 = styled.div`
  margin: 20px;
  width: 300px;
  /* height: 400px; */
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    margin: 20px 0;
  }
`;
const Card2 = styled.div`
  margin: 20px;
  width: 600px;
  background-color: white;
  min-height: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 600px) {
    width: 360px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    padding-bottom: 20px;
    margin: 0;
  }
`;
const Card3 = styled.div`
  margin: 20px;
  width: 300px;
  height: 500px;
  background-color: lightblue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    margin: 20px 0;
  }
`;

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: fcf9f7;
`;
const Info = styled.div`
  font-weight: 900;
  font-size: 40px;
  background-color: #ebeefd;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    height: 250px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
