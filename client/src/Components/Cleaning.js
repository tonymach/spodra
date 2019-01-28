import React from "react";
import styled from "styled-components";

import ImageOne from "../Assets/Images/01@2x.png";
import BackgroundImage from "../images/7.jpg";

const Cleaning = _ => (
  <CleaningWrapper>
    <a id="cleaning"></a>
    <CleaningTitle>STÄDHJÄLP</CleaningTitle>

    <CleaningContainer>
      <LeftSideImage src={ImageOne} alt="bigImage" />

      <MainContainer>
        <LeftSide>
          <LeftSideTextContainer>
            <LeftSideText>
              Dzīvojamo māju un komerctelpu uzkopšanu mēs 
              <br />
              pārzinām lieliski. Liela pieredze, inovatīvi kopšanas 
              <br />
              līdzekļi un paši labākie darbinieki - tas mums 
              <br />
              nodrošina reputāciju, par kuru varam būt lepni šodien.
            </LeftSideText>
            <LeftSideTitle>
              <u>UZTICĒT</u>
            </LeftSideTitle>
          </LeftSideTextContainer>
        </LeftSide>
        <RightSide image={BackgroundImage} />
      </MainContainer>
    </CleaningContainer>
  </CleaningWrapper>
);

/**
 *
 * Styled Components
 *
 */
const CleaningWrapper = styled.div`
  margin-top: 300px;
`;

const CleaningTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 1.8em;
  text-align: center;
  margin-left: 19px;
  margin-bottom: -150px;
`;

const CleaningContainer = styled.div`
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
  margin-bottom: -320px;
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
`;

const LeftSideTitle = styled.h1`
  color: white;
  font-size: 0.8rem;
`;

const RightSide = styled.div`
  width: 50%;
  height: 800px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export default Cleaning;
