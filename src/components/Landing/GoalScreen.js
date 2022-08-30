import React from "react";
import styled from "styled-components";
import pix from "./download.svg";
const GoalScreen = () => {
  return (
    <Container>
      <Header>
        <ImageHolder>
          <Image src={pix} />
          <Line />
          <Title>2026 Game Plan</Title>
        </ImageHolder>
        <SubTitle>
          For there to be significant change(Positive) across any community, Two
          Generation most be able to see themeselves and meet up with each
          other...
          <br />
          <br />
          The Older bring WISDOM and SKILL, while the Younger bring STRENGTH and
          TENACITY, these are the elements needed to transform any community for
          GOOD.
          <br />
          <br />
          For us: We are using Transformational Leadership as an element to
          change the Ajegunle community for GOOD, using Software Engineering as
          a Tool to Achieve our lofty Goal for the community...!
        </SubTitle>
      </Header>
      <br />
      <br />
      <Hold>
        <NewBuild
          title="5"
          newTitle2="Companies"
          newTitle="Unicorns"
          anchor="To have Build"
        />
        <NewBuild
          title="1000"
          newTitle2="Engineers"
          newTitle="Software"
          anchor="To have trained"
        />
        <NewBuild
          title="300"
          newTitle2="Engineers"
          newTitle="CodeLab"
          anchor="Working with Fortune 500 Company"
        />
        <NewBuild
          title="50"
          newTitle="CodeLab"
          newTitle2="Centers"
          anchor="Established across Lagos State"
        />
      </Hold>
    </Container>
  );

  function NewBuild({ title, newTitle, anchor, newTitle2 }) {
    return (
      <Holder>
        <NewLine />
        <br />
        <Goal>
          {/* <Value>{title}</Value> */}
          <TitleData>{title}</TitleData>
          <ValueHolder>
            <ValueFig>{newTitle}</ValueFig>
            <ValueFig>{newTitle2}</ValueFig>
          </ValueHolder>
        </Goal>
        <Div>{anchor}</Div>
      </Holder>
    );
  }
};

export default GoalScreen;

const Div = styled.div`
  /* font-weight: 700;
  margin: 0;
  color: #004080;
  letter-spacing: 0px;
  background: green;
  line-height: 1.2px;
  text-decoration: none; */
`;

const TitleData = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  color: #004080;
  letter-spacing: 0px;
  line-height: 1.2px;
  text-decoration: none;
`;

const ValueFig = styled.div`
  margin: 0 5px;
  line-height: 1;
`;

const ValueHolder = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 10px;
`;

const Value = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  color: #004080;
  letter-spacing: 0px;
  background: green;
  line-height: 1.2px;
  text-decoration: none;
`;

const Goal = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
`;

const NewLine = styled.div`
  width: 60px;
  height: 10px;
  background-color: darkorange;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 50px;

  @media screen and (max-width: 600px) {
    margin: 15px;
  }
`;

const Hold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.2;
  width: 85%;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    line-height: 1;
    font-size: 20px;
  }
`;

const Line = styled.div`
  /* border-right: 3px solid #004080; */
  margin: 0 20px;
  height: 50px;
  width: 3px;
  background: #004080;
`;

const Image = styled.img`
  height: 60px;
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
`;
