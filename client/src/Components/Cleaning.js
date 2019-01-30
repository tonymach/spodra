import React from "react";
import styled from "styled-components";

import ImageOne from "../Assets/Images/01@2x.png";
import BackgroundImage from "../images/7.jpg";

const Cleaning = ({ openModal }) => (
  <CleaningWrapper>
    <button id="cleaning" />
    <CleaningTitle>STÄDHJÄLP</CleaningTitle>

    <CleaningContainer>
      <LeftSideImage src={ImageOne} alt="bigImage" />

      <MainContainer>
        <LeftSide>
          <LeftSideTextContainer>
            <LeftSideText>
              Våra städare kan både jobba i privathus 
              <br />
              och kontorer och är utbildade på en super 
              <br />
              bra nivå. Våra stjärnor är utbildade till 
              <br />
              storstädningar och kan utföra de mest 
              <br />
              komplicerade städningar inomhus. Allt 
              <br />
              städas ordentligt och detaljerat!
            </LeftSideText>
            <LeftSideTitle onClick={openModal}>
              <u>BOKA</u>
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

  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
    margin-bottom: -100px;
  }
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

  @media screen and (max-width: 1400px) {
    margin-bottom: -250px;
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
`;

const RightSide = styled.div`
  width: 50%;
  height: 800px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export default Cleaning;
