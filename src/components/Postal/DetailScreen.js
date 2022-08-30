import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import img1 from "./cup.svg";
import pix from "./6.jpg";
import { AiFillHome, AiFillAppstore, AiFillContacts } from "react-icons/ai";
import { MdContactless } from "react-icons/md";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import arr from "./cup.svg";
import DetailedInfo from "./DetailedInfo";
import axios from "axios";
import PortalInterest from "./PortalInterest";
import { useSelector } from "react-redux";
import SoftwareCourse from "./SettingsInfo/SoftwarePortal";
import StackView from "./StackView";
import StackedEnter from "./SettingsInfo/StackEntered";
import azura from "../Landing/Logo/AZ.jpg";
import open from "../Landing/Logo/open.svg";
import save from "../Landing/Logo/save.png";
import ibm from "../Landing/Logo/ibm.png";
import moment from "moment";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import LoadingState from "../LoadingState";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
import StatScreen from "./StatScreen";

const url = "https://studentbe1.herokuapp.com";
const socket = io("https://studentbe1.herokuapp.com");

const StudentDetail = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [myData, setMyData] = React.useState([]);
  const [myGallaryData, setMyGallaryData] = React.useState([]);

  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [stacked, setStacked] = useState("");
  const [myStatData, setMyStatStat] = useState({});

  const fetchDataDetail = async (id) => {
    await axios.get(`${url}/api/project/${id}`).then((res) => {
      setMyData(res.data.data);
    });
  };

  const fetchGallaryataDetail = async (id) => {
    await axios.get(`${url}/api/gallary/${id}`).then((res) => {
      setMyGallaryData(res.data.data);
    });
  };

  const fetchStat = async (id) => {
    await axios.get(`${url}/api/stat/${id}`).then((res) => {
      setMyStatStat(res.data.data);
    });
  };

  const DeleteDetail = async (del) => {
    await axios
      .delete(`${url}/api/gallary/${id}/${del}`)

      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Memory Deleted",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {});
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

  const stackCreated = async (newID) => {
    await axios
      .post(`${url}/api/project/${id}/${newID}/stack/create`, {
        title: stacked,
      })

      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Stack added to this Project successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {});
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
    setStacked("");
  };

  const [myStat, setMyStat] = useState(false);
  const [about, setAbout] = useState(true);
  const [myGallary, setMyGallary] = useState(false);

  useEffect(() => {
    fetchDataDetail(id);
    fetchGallaryataDetail(id);
    fetchStat(id);

    socket.on("stat", (newData) => {
      fetchStat(id);
    });

    socket.on("addGallary", (newData) => {
      fetchGallaryataDetail(id);
    });

    socket.on("online", (newData) => {
      fetchDataDetail(id);
    });

    socket.on("delete", (deleteData) => {
      fetchGallaryataDetail(id);
    });
  }, [id, myGallaryData]);

  return (
    <Container>
      {loading ? <LoadingState /> : null}

      <Wrapper>
        <Info>{myData?.userName}'s Detail Page</Info>
        <DetailedInfo props={myData} />
        <Detail>
          <Card1>
            <Proj>Projects Done</Proj>

            {myData.project?.map((props, i) => (
              <Holder key={i}>
                <Box>{i}</Box>
                <Cont>
                  <Name>
                    {props.title}
                    <span>(web)</span>
                  </Name>
                  <Abt>{props.desc}</Abt>

                  <MyButtonLink2
                    bg="#09386d"
                    rel="noreferrer"
                    target="_blank"
                    href={`${props.url}`}
                  >
                    view project
                  </MyButtonLink2>

                  <Line />

                  {user ? (
                    <div>
                      <Input />
                      <MyButton
                        bg="darkorange"
                        onClick={() => {
                          stackCreated(props._id);
                        }}
                      >
                        Add Stack
                      </MyButton>
                    </div>
                  ) : null}
                  {user ? <Line /> : null}
                  <AbText>Technologies used on this project</AbText>
                  <StackView props={props} />
                </Cont>
              </Holder>
            ))}
          </Card1>
          <Card2>
            <div>
              <Nav>
                <NavHolder
                  bg={myStat ? "bg" : ""}
                  onClick={() => {
                    setAbout(false);
                    setMyGallary(false);
                    setMyStat(true);
                  }}
                >
                  <NavIcon4 />
                  <Title cap fs>
                    My Stat
                  </Title>
                </NavHolder>
                <NavHolder
                  bg={about ? "bg" : ""}
                  onClick={() => {
                    setAbout(true);
                    setMyGallary(false);
                    setMyStat(false);
                  }}
                >
                  <NavIcon3 />
                  <Title cap fs>
                    About Me
                  </Title>
                </NavHolder>

                <NavHolder
                  bg={myGallary ? "bg" : ""}
                  onClick={() => {
                    setAbout(false);
                    setMyGallary(true);
                    setMyStat(false);
                  }}
                >
                  <NavIcon />
                  <Title cap fs>
                    Gallary
                  </Title>
                </NavHolder>
              </Nav>
            </div>

            {about ? (
              <div>
                <About>Know me Better</About>
                <VideoContent>
                  {myData.video ? (
                    <Video
                      src={`https://www.youtube.com/embed/${
                        myData.video?.split("/")[3]
                      }`}
                      controls
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                  ) : (
                    <Video
                      src="https://www.youtube.com/embed/8ISwMYS_KkA"
                      controls
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                  )}

                  <AboutMe>{myData.aboutYou}</AboutMe>
                </VideoContent>
                <Profile>{myData.desc}</Profile>
                <About>My Promise to Learning</About>
                <VideoContent>
                  <DetailProfile>{myData.promise}</DetailProfile>
                </VideoContent>

                <About>Certifications Gotten</About>
                <VideoContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={azura} />
                      <Text>Microsoft Azure Certificate</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={ibm} />
                      <Text>IBM Data Structure & Algorithm Certificate</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={open} />
                      <Text>
                        OpenJS Node.js Application Developer (JSNAD) certificate
                      </Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={save} />
                      <Text>Certified React Developer</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                </VideoContent>
              </div>
            ) : myGallary ? (
              <div>
                <PostImages>
                  {myGallaryData?.gallary?.map((props) => (
                    <DivaVA>
                      <ImagePost src={props.image} key={props._id} />
                      <CloseIcon
                        onClick={() => {
                          DeleteDetail(props._id);
                        }}
                      />
                    </DivaVA>
                  ))}
                </PostImages>
              </div>
            ) : myStat ? (
              <div>
                <div>
                  <StatScreen
                  // key={props._id} props={props}
                  />
                </div>
              </div>
            ) : null}
          </Card2>

          <Card3>
            <FileHolder>
              {myData?.avatar ? (
                <Image src={myData?.avatar} />
              ) : (
                <Image
                  src={
                    "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-260nw-740523562.jpg"
                  }
                />
              )}
              <Label>
                <LabelTitle>First Name: </LabelTitle>
                <LabelData>
                  {myData && myData?.userName?.split(" ")[0]}
                </LabelData>
              </Label>
              <Label>
                <LabelTitle>Last Name: </LabelTitle>
                <LabelData>
                  {myData && myData?.userName?.split(" ")[1]}
                </LabelData>
              </Label>

              <Label>
                <LabelTitle>Sponsor:</LabelTitle>
                <LabelData>{myData?.sponor}</LabelData>
              </Label>

              <Label>
                <LabelTitle>Contact:</LabelTitle>
                <LabelData>0{myData?.phone}</LabelData>
              </Label>

              <Label>
                <LabelTitle>Started Coding:</LabelTitle>
                <LabelData>
                  {moment(
                    `${myData?.createdAt?.split("T")[0].replace(/-/g, "")}`,
                    "YYYYMMDD"
                  ).fromNow()}
                </LabelData>
              </Label>

              <Label>
                <LabelTitle>Soft Skills:</LabelTitle>
                <LabelData>
                  <PortalInterest
                    props={myData}
                    bg="darkorange"
                    color="white"
                  />
                </LabelData>
              </Label>
              <Label>
                <LabelTitle>Core Skills:</LabelTitle>
                <LabelData>
                  <SoftwareCourse bg="#57b642" color="white" props={myData} />
                </LabelData>
              </Label>
              <Stake />
              <Button>
                <LogIn to={`learning/${myData._id}`}>
                  <Icon>
                    {" "}
                    <MdContactless />{" "}
                  </Icon>
                  <TextNow>View My Learnings</TextNow>
                </LogIn>
              </Button>
            </FileHolder>
          </Card3>
        </Detail>

        <Detail2>
          <Card>
            <Card3>
              <FileHolder>
                {myData?.avatar ? (
                  <Image src={myData?.avatar} />
                ) : (
                  <Image
                    src={
                      "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-260nw-740523562.jpg"
                    }
                  />
                )}
                <Label>
                  <LabelTitle>First Name: </LabelTitle>
                  <LabelData>
                    {myData && myData?.userName?.split(" ")[0]}
                  </LabelData>
                </Label>
                <Label>
                  <LabelTitle>Last Name: </LabelTitle>
                  <LabelData>
                    {myData && myData?.userName?.split(" ")[1]}
                  </LabelData>
                </Label>
                <Label>
                  <LabelTitle>Sponsor:</LabelTitle>
                  <LabelData>{myData?.sponor}</LabelData>
                </Label>

                <Label>
                  <LabelTitle>Contact:</LabelTitle>
                  <LabelData>0{myData?.phone}</LabelData>
                </Label>

                <Label>
                  <LabelTitle>Started Coding:</LabelTitle>
                  <LabelData>
                    {moment(
                      `${myData?.createdAt?.split("T")[0].replace(/-/g, "")}`,
                      "YYYYMMDD"
                    ).fromNow()}
                  </LabelData>
                </Label>

                <Label>
                  <LabelTitle>Skills Learnt:</LabelTitle>
                  <LabelData>
                    <PortalInterest
                      props={myData}
                      bg="darkorange"
                      color="white"
                    />
                  </LabelData>
                </Label>
                <Label>
                  <LabelTitle>Core Skills:</LabelTitle>
                  <LabelData>
                    {/* {myData.pry?.map((props, i) => (
                      <CoreSkill key={i}>{props.interest} </CoreSkill>
                    ))} */}

                    <SoftwareCourse bg="#57b642" color="white" props={myData} />
                  </LabelData>
                </Label>
                <Stake />
                <Button>
                  <LogIn to={`learning/${myData._id}`}>
                    <Icon>
                      {" "}
                      <MdContactless />{" "}
                    </Icon>
                    <TextNow>View My Learnings</TextNow>
                  </LogIn>
                </Button>
              </FileHolder>
            </Card3>

            {/* Work on */}
            <Hide>
              <Card1>
                <Proj>Projects Done</Proj>

                {myData.project?.map((props, i) => (
                  <Holder key={i}>
                    <Box>{i}</Box>
                    <Cont>
                      <Name>
                        {props.title}
                        <span>(web)</span>
                      </Name>
                      <Abt>{props.desc}</Abt>
                      <MyButtonLink2
                        bg="#09386d"
                        rel="noreferrer"
                        target="_blank"
                        href={`${props.url}`}
                      >
                        view project
                      </MyButtonLink2>
                      <Line />
                      {user ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Input
                            placeholder="Enter Stack used"
                            value={stacked}
                            onChange={(e) => {
                              setStacked(e.target.value);
                            }}
                          />
                          <MyButton
                            bg="darkorange"
                            onClick={() => {
                              stackCreated(props._id);
                            }}
                          >
                            Add Stack
                          </MyButton>
                        </div>
                      ) : null}
                      {user ? <Line /> : null}

                      <AbText>Technologies used on this project</AbText>
                      <StackView props={props} />
                    </Cont>
                  </Holder>
                ))}
              </Card1>
            </Hide>
          </Card>
          <Card2>
            <div>
              <Nav>
                <NavHolder
                  bg={myStat ? "bg" : ""}
                  onClick={() => {
                    setAbout(false);
                    setMyGallary(false);
                    setMyStat(true);
                  }}
                >
                  <NavIcon4 />
                  <Title cap fs>
                    My Stat
                  </Title>
                </NavHolder>
                <NavHolder
                  bg={about ? "bg" : ""}
                  onClick={() => {
                    setAbout(true);
                    setMyGallary(false);
                    console.log("Click");
                  }}
                >
                  <NavIcon3 />
                  <Title cap fs>
                    About Me
                  </Title>
                </NavHolder>

                <NavHolder
                  bg={myGallary ? "bg" : ""}
                  onClick={() => {
                    setAbout(false);
                    setMyGallary(true);
                  }}
                >
                  <NavIcon />
                  <Title cap fs>
                    Gallary
                  </Title>
                </NavHolder>
              </Nav>
            </div>

            {about ? (
              <div>
                <About>Know me Better</About>
                <VideoContent>
                  {myData.video ? (
                    <Video
                      src={`https://www.youtube.com/embed/${
                        myData.video?.split("/")[3]
                      }`}
                      controls
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                  ) : (
                    <Video
                      src="https://www.youtube.com/embed/8ISwMYS_KkA"
                      controls
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />
                  )}

                  <AboutMe>{myData.aboutYou}</AboutMe>
                </VideoContent>
                <Profile>{myData.desc}</Profile>
                <About>My Promise to Learning</About>
                <VideoContent>
                  <DetailProfile>{myData.promise}</DetailProfile>
                </VideoContent>

                <About>Certifications Gotten</About>
                <VideoContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={azura} />
                      <Text>Microsoft Azure Certificate</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={ibm} />
                      <Text>IBM Data Structure & Algorithm Certificate</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={open} />
                      <Text>
                        OpenJS Node.js Application Developer (JSNAD) certificate
                      </Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                  <CertContent>
                    <Cert>
                      <CertLogo src={save} />
                      <Text>Certified React Developer</Text>
                    </Cert>
                    <Result>Yet to Obtain</Result>
                  </CertContent>
                </VideoContent>
              </div>
            ) : myGallary ? (
              <div>
                <PostImages>
                  {myGallaryData?.gallary?.map((props) => (
                    <DivaVA>
                      <ImagePost src={props.image} key={props._id} />
                      <CloseIcon
                        onClick={() => {
                          DeleteDetail(props._id);
                        }}
                      />
                    </DivaVA>

                    // <div>New</div>
                  ))}
                </PostImages>
              </div>
            ) : myStat ? (
              <div>
                <div>
                  <StatScreen
                  // key={props._id} props={props}
                  />
                </div>
              </div>
            ) : null}
          </Card2>
          <View>
            <Card1>
              <Proj>Projects Done</Proj>

              {myData.project?.map((props, i) => (
                <Holder key={i}>
                  <Box>{i}</Box>
                  <Cont>
                    <Name>
                      {props.title}
                      <span>(web)</span>
                    </Name>
                    <Abt>{props.desc}</Abt>
                    <MyButtonLink2
                      bg="#09386d"
                      rel="noreferrer"
                      target="_blank"
                      href={`${props.url}`}
                    >
                      view project
                    </MyButtonLink2>
                    <Line />
                    {user ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Input
                          placeholder="Enter Stack used"
                          value={stacked}
                          onChange={(e) => {
                            setStacked(e.target.value);
                          }}
                        />
                        <MyButton
                          bg="darkorange"
                          onClick={() => {
                            stackCreated(props._id);
                          }}
                        >
                          Add Stack
                        </MyButton>
                      </div>
                    ) : null}
                    {user ? <Line /> : null}

                    <AbText>Technologies used on this project</AbText>
                    <StackView props={props} />
                  </Cont>
                </Holder>
              ))}
            </Card1>
          </View>
        </Detail2>
      </Wrapper>
    </Container>
  );
};

export default StudentDetail;
const DivaVA = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  object-fit: cover;
  margin: 5px;
  @media screen and (max-width: 450px) {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: 5px;
  }
`;

const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  right: -3px;
  top: 8px;
  z-index: 200;
  font-size: 20px;
  color: red;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ImagePost = styled.img`
  width: 175px;
  height: 175px;
  object-fit: cover;
  margin: 5px;
  @media screen and (max-width: 450px) {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: 5px;
  }
`;

const PostImages = styled.div`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  padding-bottom: 20px;
`;

const Title = styled.div`
  text-transform: ${({ cap }) => (cap ? "uppercase" : "normal")};
  font-size: ${({ fs }) => (fs ? "10px" : "12px")};
  font-weight: ${({ fs }) => (fs ? "500" : "normal")};
  color: ${({ fs }) => (fs ? "lightgray" : "black")};
`;

const NavIcon4 = styled(ImStatsDots)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon3 = styled(BsPersonBoundingBox)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon2 = styled(BsBookmark)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon1 = styled(MdSlowMotionVideo)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavIcon = styled(BsGrid3X3)`
  font-size: 10px;
  margin-right: 3px;
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;

  :after {
    content: "";
    height: 2px;
    background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
    width: 100%;
    position: absolute;
    top: -21px;
  }

  cursor: pointer;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid silver;
  padding: 20px 0;
`;

const Hide = styled.div`
  /* display: none; */
  @media screen and (max-width: 981px) {
    display: none;
  }
`;
const View = styled.div`
  display: none;
  @media screen and (max-width: 981px) {
    display: flex;
  }
`;

const TextNow = styled.div`
  margin-left: 0px;
  font-family: Poppins;
  line-height: 1;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
`;

const AbText = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #004080;
`;
const Result = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const CertLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Cert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 300;
  width: 250px;
  text-align: center;
`;

const CertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
  border: 1px solid gray;
  border-radius: 2px;
  background-color: transparent;
  margin-bottom: 10px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const MyButtonLink2 = styled.a`
  margin: 10px 0;
  text-decoration: none;
  transition: all 350ms;
  padding: 7px 10px;
  border-radius: 30px;
  background-color: ${({ bg }) => bg};
  text-decoration: none;
  width: 80px;
  color: white;
  padding-left: 12px;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const MyButton = styled.div`
  transition: all 350ms;
  padding: 7px 5px;
  border-radius: 30px;
  background-color: ${({ bg }) => bg};
  text-decoration: none;
  width: 80px;
  color: white;
  padding-left: 12px;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const MyButtonLink = styled(Link)`
  transition: all 350ms;
  padding: 7px 5px;
  border-radius: 30px;
  background-color: ${({ bg }) => bg};
  text-decoration: none;
  width: 80px;
  color: white;
  padding-left: 12px;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const AboutMe = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
`;

const Video = styled.iframe`
  width: 90%;
  height: 300px;
  background-color: black;
  object-fit: cover;
`;

const VideoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
  padding-top: 0px;
  margin-top: 0;
  margin: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
const DetailProfile = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 40px;
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
  margin-left: 7px;
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
  align-items: center;
  margin-top: 12px;
`;
const LabelTitle = styled.div`
  margin-right: 20px;
  font-size: 14px;
`;
const LabelData = styled.div`
  font-weight: bold;
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  margin-bottom: 20px;
`;
const StackFileCheck = styled.a`
  text-decoration: none;
  padding: 5px 10px;
  background-color: #09386d;
  color: white;
  border-radius: 30px;
  font-size: 11px;
  letter-spacing: 1.5px;
  margin: 5px;
  font-family: Poppins;
  text-transform: uppercase;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

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
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-direction: column-reverse; */

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
  min-height: 300px;
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
  height: 600px;
  background-color: lightblue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    margin: 20px 0;
  }
`;

const Container = styled.div`
  padding-top: 70px;
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
