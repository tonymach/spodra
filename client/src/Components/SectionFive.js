import React from "react";
import styled from "styled-components";

const SectionFive = ({ image, onClick }) => {
  return (
    <SectionFiveWrapper>
      <LeftSide />
      <RightSide>
        <RightSideTitle>testa vår service</RightSideTitle>
        <RightSideText>
          För att testa Spodras Lux’s städ hjälp 
          <br />
          med trygghet, så erbjuder vi
          <br />
          första städningen för bara 125kr i timmen. 
          <br />
          Vi garanterar en nöjd kund för ett bra pris!
        </RightSideText>
        <LargeScale>125 kr.</LargeScale>
        <BookNowButton onClick={onClick}>Att Boka</BookNowButton>
      </RightSide>
    </SectionFiveWrapper>
  );
};

/* Styled Components */
const SectionFiveWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 65vh;
  margin-top: -15vh;
  background: #ff6464;
`;

const LeftSide = styled.div`
  height: 100%;
  color: #10069f;
`;

const RightSideTitle = styled.h1`
  margin-top: -8vh;
  font-size: 0.8rem;
  color: #10069f;
`;

const RightSideText = styled.p`
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 0.8rem;
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
  color: #fff;
  margin-bottom: 67px;
  font-size: 3rem;
  font-family: "Butler Medium", serif;
  font-weight: medium;
`;

const BookNowButton = styled.button`
  width: 260px;
  height: 100px;
  outline: 0;
  background: #10069f;
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

export default SectionFive;
