// TODO: Workout the big AD image and make it fit the container and screen

import React from "react";
import styled from "styled-components";

import BigTextImage from "../Assets/Images/bigText.png";
// import BigADURL from "../Assets/Images/big_ad.png";

const SectionFour = ({ image }) => {
  return (
    <SectionFourWrapper>
      <LeftSide bgImage={image}>
        <LargeScale src={BigTextImage} alt="PRIS" />
      </LeftSide>

      <RightSide>
        <RightSideTitle>PRIS</RightSideTitle>
        <RightSideText>
          Vi har rimliga priser och individuell 
          <br />
          anpassning för varje kund och hans önskemål!
        </RightSideText>
      </RightSide>
    </SectionFourWrapper>
  );
};

/* Styled Components */
const SectionFourWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  min-height: 110vh;
  margin-top: 20vh;
`;

const LeftSide = styled.div`
  min-height: 120px;
  max-height: auto;

  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  z-index: 10;
  margin-bottom: -180px;
`;

const RightSideTitle = styled.h1`
  margin-bottom: 120px;
  margin-top: 178px;
  margin-left: 105px;
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const RightSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 0.8rem;
  display: block;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const RightSide = styled.div`
  background-color: #10069f;
  margin-top: -10vh;
  height: 80vh;
  color: #fff;
`;

const LargeScale = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: 200px;
  margin-left: 200px;

  @media screen and (max-width: 1400px) {
    margin-left: 230px;
    max-width: 70%;
  }
`;

export default SectionFour;
