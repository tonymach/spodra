import React from "react";
import styled from "styled-components";

const SectionFour = ({ image }) => {
  return (
    <SectionFourWrapper>
      <LeftSide bgImage={image}>
        <LargeScale>
        PRIS
        </LargeScale>
      </LeftSide>

      <RightSide>

      <RightSideTitle>PRIS</RightSideTitle>
      <RightSideText>
      Laiks ir naudas valūta. Mēs lietojam savu laiku,
      <br />
      lai dabūtu naudu. Līdz ar to - jo izdevīgāk mēs
      <br />

      norēķināmies, jo mazāk laika esam pavadījuši, lai šo

      <br />
      naudu nopelnītu.
      </RightSideText>

      </ RightSide>
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
  height: 100%;
  color: #fff;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;


`;

const RightSideTitle = styled.h1`
  margin-bottom: 168px;
  margin-top: 178px;
  margin-left: 138px;
`;

const RightSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 16px;
  display: block;

`;

const RightSide = styled.div`
  background-color:#10069F;
  margin-top: -10vh;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;
  height: 80vh;
  color: #fff;

`;

const LargeScale = styled.h1`
position:relative;
  z-index: 10;
  margin-top:5vh;
  margin-left:2vw;
  color: #fff;
  font-size: 30em;
`;

export default SectionFour;
