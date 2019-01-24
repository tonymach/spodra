// TODO: Workout the big AD image and make it fit the container and screen

import React from "react";
import styled from "styled-components";

import BigTextImage from "../Assets/Images/bigText.png";
import BigADURL from "../Assets/Images/big_ad.png";

const SectionFour = ({ image }) => {
  return (
    <SectionFourWrapper>
      <LeftSide bgImage={image}>
        <LargeScale src={BigTextImage} alt="PRIS" />
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
      </RightSide>

      <BottomSection>
        <BottomSectionInner>
          <BottomSectionInnerSquare>
            <BottomSectionInnerSquareTitle>
              SAMARBETE
            </BottomSectionInnerSquareTitle>
            <BottomSectionInnerSquareText>
              Lai pārbaudītu mūsu saderību, mēs piedāvājam iepazīšanās cenu
              telpu tīrīšanai līdz 80m2
            </BottomSectionInnerSquareText>
            <BottomSectionInnerSquareBigText>
              - 156 kr.
            </BottomSectionInnerSquareBigText>
            <BottomSectionInnerSquareButton>
              Att Boka
            </BottomSectionInnerSquareButton>
          </BottomSectionInnerSquare>
          {/* <BottomSectionAd src={BigADURL} alt="AD" /> */}
        </BottomSectionInner>
      </BottomSection>
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
  height: 1000px;
  color: #fff;
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
`;

const RightSideText = styled.p`
  margin-left: 100px;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 16px;
  display: block;
`;

const RightSide = styled.div`
  background-color: #10069f;
  margin-top: -10vh;
  height: 80vh;
  color: #fff;
`;

const LargeScale = styled.img`
  position: relative;
  z-index: 10;
  margin-top: 20vh;
  height: 314px;
  display: block;
  margin-left: 2vw;
  color: #fff;
  z-index: 2;
`;

const BottomSection = styled.div` 
  height: 100%;
  width: 1379px;
  z-index: 0;
`;

const BottomSectionInner = styled.div`
  background: #FF6464;
  height: 500px;
  width: 100%;
  padding-left: 743px;
`;

const BottomSectionInnerSquare = styled.div`
  height: 465px;
  width: 465px;
  display: block;
  position: relative;
  bottom: 90px;
`;

const BottomSectionInnerSquareTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 22px;
  margin-bottom: 123px;
`;

const BottomSectionInnerSquareText = styled.p`
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 22px;
  color: white;
`;

const BottomSectionInnerSquareBigText = styled.h2`
  font-family: "Butler Medium", serif;
  font-size: 70px;
  margin-bottom: 67px;
  color: white;
`;

const BottomSectionInnerSquareButton = styled.button`
  width: 260px;
  height: 100px;
  outline: 0;
  background: #10069F;
  color: white;
  font-size: 34px;
  font-family: "HK Grotesk Bold", sans-serif;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-5px);
    border-bottom: 10px solid rgb(12, 5, 109);
  }

  &:active {
    transform: translateY(1px);
    border-bottom: 6px solid rgb(12, 5, 109);
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const BottomSectionAd = styled.img`
  height: 500px;
  display: block;
  margin-top: 400px;
`;

export default SectionFour;
