import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../State/GlobalState";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import SiderBar from "./SiderBar";

const url = "https://studentbe1.herokuapp.com";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [toggled, setToggled] = useState();

  const onToggled = () => {
    setToggled(!toggled);
  };

  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    await axios.get(`${url}/api/user/${user?._id}`).then((res) => {
      setUserData(res.data.data);
      console.log(userData);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <LogoHolder to="/">
              <Logo src={logo} />
            </LogoHolder>

            <Navigation>
              <Nav to="/">
                <span>Home</span>
              </Nav>
              <Nav to="/about">
                <span>About</span>
              </Nav>
              <Nav to="/portal">
                <span>Portal</span>
              </Nav>
              <Nav to="/gallary">
                <span>Gallary</span>
              </Nav>
            </Navigation>
          </Holder>

          <ProfileHolder>
            {user ? (
              <Div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {userData.avatar ? (
                    <Profile src={userData.avatar} />
                  ) : (
                    <AvatarText>{user.email.charAt(0)}</AvatarText>
                  )}
                </div>
                <Setting to="/setting">
                  <AiFillSetting />
                </Setting>
                <ButtonNav
                  onClick={async () => {
                    navigate("/");
                    dispatch(removeUser());
                    await axios.patch(`${url}/api/user/${user._id}/offline`);
                    window.location.reload();
                    navigate("/");
                  }}
                >
                  Log out
                </ButtonNav>{" "}
              </Div>
            ) : (
              <Button to="/register">Register</Button>
            )}
          </ProfileHolder>
          {toggled ? (
            <IconClose
              onClick={() => {
                onToggled();
              }}
            />
          ) : (
            <Icon
              onClick={() => {
                onToggled();
              }}
            />
          )}
        </Wrapper>

        {toggled ? (
          <SiderBar
            toggled={toggled}
            setToggled={setToggled}
            onToggled={onToggled}
          />
        ) : null}
      </Container>
    </div>
  );
};

export default Header;

const MySideBar = styled.div`
  width: 0;
  height: 100%;
  background: #f4f5fa;
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  left: 0;
  bottom: 0;
  border-radius: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  color: white;
  transition: all 350ms ease-in-out;
  overflow: hidden;
`;

const IconClose = styled(FaRegWindowClose)`
  font-size: 40px;
  color: white;
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    transition: all 350ms;
    margin: 0 5px;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

const Icon = styled(GiHamburgerMenu)`
  font-size: 40px;
  color: white;
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    transition: all 350ms;
    margin: 0 5px;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Setting = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  transition: all 350ms;
  margin: 0 10px;
  display: flex;
  align-items: center;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Button = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: darkorange;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 900;
  transition: all 350ms;
  margin: 0 5px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const ButtonNav = styled.div`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: darkorange;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 900;
  transition: all 350ms;
  margin: 0 5px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const AvatarText = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 5px;
  border: 1px solid white;
  background: darkorange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
`;

const Profile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 5px;
  border: 1px solid white;
  object-fit: cover;
`;

const ProfileHolder = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled(NavLink)`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  transition: all 350ms;
  text-decoration: none;
  color: white;
  margin: 0 10px;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: darkorange;
    bottom: 0%;
    left: 0;
    opacity: 0;
    transition: all 350ms;
    transform: scale(0);
    transform-origin: left;
  }

  &.active {
    color: darkorange;

    :after {
      opacity: 1;
      color: blue;
    }
  }

  :hover {
    cursor: pointer;
    :after {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

const Navigation = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 28px;
`;

const LogoHolder = styled(Link)`
  display: flex;
  margin-right: 30px;
  transition: all 350ms;
  font-weight: 900;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  width: 96%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  position: fixed;
  color: white;
  background: #1e1f21;
  z-index: 2;
  color: white;
`;
