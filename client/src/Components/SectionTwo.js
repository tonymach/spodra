import React from "react";
import styled from "styled-components";

import TidImage from "../Assets/Images/Tid2x.png";

const SectionTwo = ({ image }) => {
  return (
    <SectionTwoWrapper>
      <LeftSide>
        <LeftSideTitle>TID</LeftSideTitle>
        <LeftSideText>
          Reizi nedēļā tīrot māju 3 stundas mēs gadā vidēji 
          <br />
          iztērējam 156
          stundas!
          <br />
          <br />
          156 stundas , kuras varētu pavadīt ar ģimeni, 
          <br />
          draugiem vai apgūstot ko jaunu!
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
`;

const LeftSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 0.8rem;
  display: block;
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
`;

export default SectionTwo;
