import React from "react";
import styled from "styled-components";

const SectionOne = ({ image }) => {
  return (
    <SectionOneWrapper>
      <LeftSide>
        <LeftSideTitle>VARFÖR VI?</LeftSideTitle>
        <LeftSideText>
          Är det dags för dig att flytta? Då vill du förmodligen ha
          <br />
          hjälp med flytten så att den blir både effektiv och
          <br />
          smidig. Ta hjälp av oss på Spodra LUX! Vi är nämligen
          <br />
          specialister på flytt och vi är en flyttfirma i Stockholm
          <br />
          med många års erfarenhet inom området.
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
  background: #10069F;
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
