import React from "react";
import styled from "styled-components";

import ImageTwo from "../Assets/Images/02@2x.png";
import BackgroundImage from "../images/3.jpg";

const RelocationAssistance = ({ openModal }) => (
  <RelocationAssistanceWrapper>
    <button id="relocationAssistance" />
    <RelocationAssistanceTitle>FLYTTHJÄLP</RelocationAssistanceTitle>

    <RelocationAssistanceContainer>
      <LeftSideImage src={ImageTwo} alt="bigImage" />
      <MainContainer>
        <RightSide image={BackgroundImage} />

        <LeftSide>
          <LeftSideTextContainer>
            <LeftSideText>
              Är det dax att flytta? Då vill du 
              <br />
              förmogligen ha hjälp med flytten så att 
              <br />
              det blir effektiv och smidig. Ta hjälp 
              <br />
              av oss på Spodra LUX! Vi är nämligen 
              <br />
              specialister på flytt och städ. Vi är firman i
              <br />
              Stockholm med många års erfarenhet inom detta området.
            </LeftSideText>
            <LeftSideTitle onClick={openModal}>
              <u>UZTICĒT</u>
            </LeftSideTitle>
          </LeftSideTextContainer>
        </LeftSide>
      </MainContainer>
    </RelocationAssistanceContainer>
  </RelocationAssistanceWrapper>
);

/**
 *
 * Styled Components
 *
 */
const RelocationAssistanceWrapper = styled.div`
  margin-top: 300px;
`;

const RelocationAssistanceTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 1.8rem;
  text-align: center;
  margin-left: 19px;
  margin-bottom: -150px;

  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
    margin-bottom: -100px;
  }
`;

const RelocationAssistanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div`
  width: 50%;
  height: 580px;
  background: #10069f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftSideImage = styled.img`
  width: 600px;
  display: block;
  position: relative;
  float: right;
  right: 0;
  margin-bottom: -270px;

  @media screen and (max-width: 1400px) {
    margin-bottom: -200px;
    width: 400px;
  }
`;

const LeftSideTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 480px;
  margin-top: 220px;
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 0.9rem;
`;

const LeftSideText = styled.p`
  color: white;
  margin-bottom: 20px;
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const LeftSideTitle = styled.h1`
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: skyblue;
  }
  
  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 800px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export default RelocationAssistance;
