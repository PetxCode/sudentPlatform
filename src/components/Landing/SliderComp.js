import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,

    // dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 9000,
    cssEase: "linear",
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          <DDiv>
            {/* <h2> Single Item</h2> */}
            <SliderSide {...settings}>
              <Holder>
                {/* <Tag>Ongoing</Tag> */}
                <Stack>
                  FullStack Software<span> Engineering</span>
                </Stack>
                <Para>With over 865 hours of rigorious Training</Para>
                <Para1>
                  Our programmes focus on building the skillsets, through
                  real-time project based learning, to get you ready to
                  transform our world.
                </Para1>
              </Holder>
              <Holder>
                <Stack>
                  Zero to Mastery in<span> FrontEnd</span> Engineering
                </Stack>
                <Para>With over 865 hours of rigorious Training</Para>
                <Para1>
                  Our programmes focus on building the skillsets, through
                  real-time project based learning, to get you ready to
                  transform our world.
                </Para1>
              </Holder>
              <Holder>
                <Stack>
                  Complete <span>BackEnd</span> proficiency
                </Stack>
                <Para>With over 865 hours of rigorious Training</Para>
                <Para1>
                  Our programmes focus on building the skillsets, through
                  real-time project based learning, to get you ready to
                  transform our world.
                </Para1>
              </Holder>
              <Holder>
                <Stack>
                  Building<span> transformed</span> Leaders
                </Stack>
                <Para>With over 865 hours of rigorious Training</Para>
                <Para1>
                  Building practical, technical and soft skills combined with
                  network, relationship building and transformational leadership
                  Trainings.
                </Para1>
              </Holder>
            </SliderSide>
          </DDiv>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SliderComp;

const Tag = styled.div`
  padding: 10px 20px;
  background: red;
  position: absolute;
  top: -30px;
`;

const Para1 = styled.div`
  font-size: 12px;
  width: 80%;
  margin-top: 10px;
  text-transform: uppercase;
  opacity: 0.6;
  /* color: black; */

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const Para = styled.div`
  color: white;
  line-height: 1;
  font-size: 13px;
  width: 90%;

  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

const Stack = styled.div`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
  max-width: 600px;
  line-height: 1;
  margin-bottom: 5px;
  width: 95%;

  span {
    margin: 0 5px;
    /* color: #1e1f21; */
    color: darkorange;
    font-weight: 900;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

const Holder = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
`;

const SliderSide = styled(Slider)`
  width: 90%;
  display: flex;
  justify-content: center;
`;
const DDiv = styled.div`
  margin-top: 10px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  min-height: 200px;
  /* background-color: #125b6a; */
  background-color: #742e9d;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -120px;

  @media screen and (max-width: 600px) {
    bottom: -150px;
  }
`;
