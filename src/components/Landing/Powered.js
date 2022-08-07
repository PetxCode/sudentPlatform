import React from "react";
import styled from "styled-components";
import pix from "./log/phone2.png";
import pix2 from "./log/phone3.png";
import pix3 from "./log/phone11.png";

const Powered = () => {
  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <Text>We Power Ambitious Youth.</Text>
          <Sub>
            From Youths in need of Technical and Leadership skill to youth who
            are ambitious of building Global tools or Youths that needs to
            become technical firepower house for Global relience, we exist for
            them. See how we are helping them become Tech Giants!
          </Sub>
        </TextHolder>

        <CardHolder>
          <NewCard
            bg="#FFFAEF"
            title="Mobile Development"
            title2="We power talents to build tools and application for mobile phones and more..."
            pix={pix}
          />
          <NewCard
            bg="#EFF6FF"
            title="PWA"
            title2="Since there is a great demand for PWA Apps, our talents are trained on this!"
            pix={pix2}
          />
          <NewCard
            bg="#EFFFF3"
            title="Responsive Development"
            title2="All application built by our talents are built with the consciousness of Mobile first!"
            pix={pix3}
          />
        </CardHolder>
      </Wrapper>
    </Container>
  );

  function NewCard({ bg, title, title2, pix }) {
    return (
      <Card bg={bg}>
        <Focus>{title}</Focus>
        <Title>{title2}</Title>

        <Phone src={pix} />
      </Card>
    );
  }
};

export default Powered;

const Phone = styled.img`
  width: 80%;
  height: 350px;
  object-fit: contain;
`;

const Title = styled.div`
  width: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Focus = styled.div`
  margin-top: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Card = styled.div`
  width: 250px;
  height: 400px;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  margin: 10px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Sub = styled.div`
  font-weight: 300;
  width: 60%;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Text = styled.div`
  margin-top: 50px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 1;
  margin-bottom: 30px;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
