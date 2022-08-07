import React from "react";
import styled from "styled-components";
import pix from "./log/le3.png";
import pix1 from "./log/1.png";
import pix2 from "./log/b1.svg";
import pix3 from "./log/b2.svg";
import pix4 from "./log/b3.svg";
import pix5 from "./log/b4.svg";

const BrandWOrk = () => {
  return (
    <Contianer>
      <Wrapper>
        <Text>
          We wish to have trained over <span>1,000</span> Youths, to become
          FullStack Engineers that are Global Talents.
        </Text>

        <Brands>
          {" "}
          <Brand src={pix5} />
          <Brand src={pix1} />
          <Brand src={pix2} />
          <Brand src={pix3} />
          <Brand src={pix} style={{ objectFit: "cover" }} />
          <Brand src={pix4} />
        </Brands>
      </Wrapper>
    </Contianer>
  );
};

export default BrandWOrk;

const Brand = styled.img`
  height: 60px;
  width: 90px;
  object-fit: contain;
  margin: 10px;
`;

const Brands = styled.div`
  color: darkorange;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 28px;
`;

const Text = styled.div`
  width: 60%;
  text-align: center;
  font-size: 28px;
  font-weight: 600;

  span {
    margin: 0 5px;
    color: darkorange;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    line-height: 1.2;
    /* margin-top: 40px; */
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contianer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #1e1f21;
  color: white;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
