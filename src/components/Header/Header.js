import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const show = () => {
    document.getElementById("sidebar").style.right = "0";
  };
  const vanish = () => {
    document.getElementById("sidebar").style.right = "-100%";
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <LogoHolder>
              <Logo>CodeLab</Logo>
            </LogoHolder>

            <Navigation>
              <Nav to="/">
                <span>Home</span>
              </Nav>
              <Nav to="/about">
                <span>About</span>
              </Nav>
              <Nav to="/start">
                <span>Start</span>
              </Nav>
            </Navigation>
          </Holder>

          <ProfileHolder>
            <Profile />
            <Button>Register</Button>
          </ProfileHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
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

const Profile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 5px;
`;

const ProfileHolder = styled.div`
  display: flex;
  align-items: center;
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
`;

const Logo = styled.div``;

const LogoHolder = styled.div`
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
