import React from "react";
import styled from "styled-components";

const PeopleTalks = () => {
  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <Text>What people and brands are saying about us.</Text>
        </TextHolder>

        <CardHolder>
          <NewCard
            brand="NIIT:"
            desc=" Festac Center"
            bg="#FFFAEF"
            title="Student's Performance"
            title2="Building an Application from scratch to finish within an hour, is something i can but imagine BUT that's a chicken feed for your student, Mhen, This is awesome!!!"
          />
          <NewCard
            brand="Adania Lab:"
            desc="Nigeria Management"
            bg="#EFF6FF"
            title="Hackathon"
            title2="Your students came for our Hackathon challenge and grab 95% the winning awards, to be honest their performance, was really phenomenal"
          />
          <NewCard
            brand="Insigna Media:"
            desc="Ikeja Branch"
            bg="#EFFFF3"
            title="Responsive Development"
            title2="Your talents are really professional, from their attitude to work, work deliverables everything is well coordinated, we enjoy working with your talents "
          />
        </CardHolder>
      </Wrapper>
    </Container>
  );

  function NewCard({ bg, title, title2, brand, desc }) {
    return (
      <Card bg={bg}>
        <Focus>{title}</Focus>
        <Title>{title2}</Title>

        <Who>
          {brand}
          <br />
          <span>{desc}</span>
        </Who>
      </Card>
    );
  }
};

export default PeopleTalks;

const Who = styled.div`
  margin-bottom: 20px;
  font-weight: 900;
  line-height: 1;

  span {
    font-weight: 300;
  }
`;

const Phone = styled.img`
  width: 80%;
  height: 350px;
  object-fit: contain;
`;

const Title = styled.div`
  width: 200px;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 30px;
  flex: 1;
`;

const Focus = styled.div`
  margin-top: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Card = styled.div`
  width: 250px;
  height: 250px;
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
`;

const Text = styled.div`
  margin: 50px 0px 20px 0;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: #004080;
  text-align: center;
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
