import React from "react";
import styled from "styled-components";

const SectionFive = ({ image }) => {
  return (
    <SectionFiveWrapper>
      <LeftSide>

      </LeftSide>
      <RightSide>

      <RightSideTitle>SAMARBETE</RightSideTitle>
      <RightSideText>
Lai pārbaudītu mūsu saderību, mēs piedāvājam
<br />
iepazīšanās cenu telpu tīrīšanai līdz 80m2
      </RightSideText>
      <LargeScale>
      -156 kr
      </ LargeScale>
      <BookNowButton>
      Att Boka
      </ BookNowButton>

      </ RightSide>
    </SectionFiveWrapper>
  );
};

/* Styled Components */
const SectionFiveWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 50vh;
  margin-top: -15vh;
  background:#FF6464;

`;

const LeftSide = styled.div`
  height: 100%;
  color: #10069F;
`;

const RightSideTitle = styled.h1`
margin-top:-5vh;
color: #10069F;
`;

const RightSideText = styled.p`
  margin-top:10vh;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 16px;
  display: block;
`;

const RightSide = styled.div`
  margin-left: 7vw;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200%;
  color: #fff;
`;

const LargeScale = styled.h1`
  margin:15px;
  color: #fff;
  font-size: 5em;
`;

const BookNowButton = styled.button`
  width: 12vw;
  height:7vh;
  background-color: #10069F;
  color: #fff;
  border: none;
  font-size: 3em;
`;


export default SectionFive;
