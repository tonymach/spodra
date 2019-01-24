import React from "react";
import styled from "styled-components";

const SectionFive = ({ image }) => {
  return (
    <SectionFiveWrapper>
      <LeftSide>

      </LeftSide>
      <RightSide>

      <RightSideTitle>TID</RightSideTitle>
      <RightSideText>
      Reizi nedēļā tīrot māju 3 stundas mēs gadā vidēji iztērējam 156 stundas!
      <br />
      <br />
      156 stundas , kuras varētu pavadīt ar ģimeni, draugiem vai apgūstot ko jaunu!
      </RightSideText>
      </ RightSide>
    </SectionFiveWrapper>
  );
};

/* Styled Components */
const SectionFiveWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 60vh;
  margin-top: -10vh;
  background:#FF6464;

`;

const LeftSide = styled.div`
  height: 100%;
  color: #10069F;
`;

const RightSideTitle = styled.h1`
margin-top:-5vh;
`;

const RightSideText = styled.p`
  margin-Right: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 16px;
  display: block;
`;

const RightSide = styled.div`
  margin-top: 30vh;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;
  height: 1000px;
`;

const LargeScale = styled.h1`
  color: #10069F;
  font-size: 35em;
`;

export default SectionFive;
