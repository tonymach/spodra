import React from "react";
import styled from "styled-components";

import TidImage from "../Assets/Images/Tid2x.png"

const SectionTwo = ({ image }) => {
  return (
    <SectionTwoWrapper>
      <LeftSide>
        <LeftSideTitle>TID</LeftSideTitle>
        <LeftSideText>
        Reizi nedēļā tīrot māju 3 stundas mēs gadā vidēji iztērējam 156 stundas!
        <br />
        <br />
        156 stundas , kuras varētu pavadīt ar ģimeni, draugiem vai apgūstot ko jaunu!
        </LeftSideText>
      </LeftSide>

      <RightSide>

        <LargeScale src={TidImage} alt="TID Image" />

      </ RightSide>
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
  color: #10069F;
`;

const LeftSideTitle = styled.h1`
  margin-bottom: 168px;
  margin-top: 178px;
  margin-left: 105px;
  font-family: "HK Grotesk", sans-serif; 
`;

const LeftSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 16px;
  display: block;
`;

const RightSide = styled.div`
  position: absolute;
  right: 5vw;
  margin-top: 25vh;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;
  height: 1000px;
`;

const LargeScale = styled.img`
  height: 390px;
  display: block;
`;

export default SectionTwo;
