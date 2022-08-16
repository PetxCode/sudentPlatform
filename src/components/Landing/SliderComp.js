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
                  FullStack Software <span>Engineering</span>
                </Stack>
                <Para>Over 865 hours of rigorious Training</Para>
                <Para1>
                  Our programmes focus on building the skillsets, through
                  real-time project based learning, to get you ready to
                  transform our world.
                </Para1>
              </Holder>
              <Holder>
                <Stack>
                  Zero to Mastery in <span>FrontEnd</span> Engineering
                </Stack>
                <Para>Over 865 hours of rigorious Training</Para>
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
                <Para>Over 865 hours of rigorious Training</Para>
                <Para1>
                  Our programmes focus on building the skillsets, through
                  real-time project based learning, to get you ready to
                  transform our world.
                </Para1>
              </Holder>
              <Holder>
                <Stack>
                  Building <span>transformational</span> Leaders
                </Stack>
                <Para>Over 865 hours of rigorious Training</Para>
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
`;

const Para = styled.div`
  color: white;
`;

const Stack = styled.div`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
  max-width: 600px;
  line-height: 1;
  margin-bottom: 5px;

  span {
    margin: 0 5px;
    color: darkorange;
    font-weight: 900;
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
  height: 200px;
  background-color: #125b6a;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -120px;
`;
