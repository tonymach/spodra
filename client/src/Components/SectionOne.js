import React from "react";
import styled from "styled-components";

const SectionOne = ({ image }) => {
  return (
    <SectionOneWrapper>
      <LeftSide>
        <LeftSideTitle>VARFÖR VI?</LeftSideTitle>
        <LeftSideText>
          Vi på Spodra Lux AB tänker först och främst 
          <br />
          på våra KUNDER som från början är alltid nya 
          <br />
          men vi strävar alltid efter att göra dem till våra 
          <br />
          stamkunder genom vår lilla men unika personlighet 
          <br />
          och vår kända service. 
          <br />
          <br />
          Ni önskar, Vi utför!
        </LeftSideText>
      </LeftSide>

      <RightSide bgImage={image} />
    </SectionOneWrapper>
  );
};

/* Styled Components */
const SectionOneWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 800px;
`;

const LeftSide = styled.div`
  background: #10069f;
  height: 760px;

  @media screen and (max-width: 1400px) {
    height: 600px;
  }
`;

const LeftSideTitle = styled.h1`
  color: white;
  margin-bottom: 168px;
  margin-top: 178px;
  margin-left: 118px;
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
    margin-left: 75px;
    margin-bottom: 108px;
  }
`;

const LeftSideText = styled.p`
  color: white;
  margin-left: 118px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 0.8rem;
  display: block;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
    margin-left: 75px;
  }
`;

const RightSide = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;
  height: 1000px;
`;

export default SectionOne;
