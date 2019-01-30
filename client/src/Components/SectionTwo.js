import React from "react";
import styled from "styled-components";

import TidImage from "../Assets/Images/Tid2x.png";

const SectionTwo = ({ image }) => {
  return (
    <SectionTwoWrapper>
      <LeftSide>
        <LeftSideTitle>TID</LeftSideTitle>
        <LeftSideText>
          Om vi städar 1 gång i veckan. Under 
          <br />
          ett år blir det 156 jobbtimmar
          <br />
          totalt som ni kan spara, använda 
          <br />
          er av för andra roligare aktiviteter
          <br />
          och vara nöjda med städningen!
        </LeftSideText>
      </LeftSide>

      <RightSide>
        <LargeScale src={TidImage} alt="TID Image" />
      </RightSide>
    </SectionTwoWrapper>
  );
};

/* Styled Components */
const SectionTwoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 800px;
  margin-top: 20vh;
`;

const LeftSide = styled.div`
  background: #fff;
  height: 760px;
  color: #10069f;
`;

const LeftSideTitle = styled.h1`
  margin-bottom: 168px;
  margin-top: 178px;
  margin-left: 105px;
  font-family: "HK Grotesk", sans-serif;
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const LeftSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 0.8rem;
  display: block;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const RightSide = styled.div`
  display: block;
  width: 600px;
  min-height: 300px;
  max-height: auto;
  margin-top: 260px;
`;

const LargeScale = styled.img`
  height: auto;
  max-width: 100%;
  display: block;
  position: relative;
  right: 100px;

  @media screen and (max-width: 1400px) {
    max-width: 70%;
  }
`;

export default SectionTwo;
