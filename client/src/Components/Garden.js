import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import ImageThree from "../Assets/Images/03@2x.png";
import BackgroundImage from "../images/5.jpg";

const Garden = ({ openModal }) => (
  <GardenWrapper>
    <Element name="third" />
    <GardenTitle>TRÄDGÅRD</GardenTitle>

    <GardenContainer>
      <LeftSideImage src={ImageThree} alt="bigImage" />

      <MainContainer>
        <LeftSide>
          <LeftSideTextContainer>
            <LeftSideText>
              Växter är vår en oas av fred i den
              <br />
              dagliga bråttom. Upprätthålla din egen
              <br />
              trädgård bör inte längre vara ekstrai,
              <br />
              i vår odlare är utrustade med utmärkta
              <br />
              färdigheter och erfarenhet!
            </LeftSideText>
            <LeftSideTitle onClick={openModal}>
              <u>BOKA</u>
            </LeftSideTitle>
          </LeftSideTextContainer>
        </LeftSide>
        <RightSide image={BackgroundImage} />
      </MainContainer>
    </GardenContainer>
  </GardenWrapper>
);

/**
 *
 * Styled Components
 *
 */
const GardenWrapper = styled.div`
  margin-top: 300px;
`;

const GardenTitle = styled.h1`
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

const GardenContainer = styled.div`
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
  margin-top: 100px;
`;

const LeftSideImage = styled.img`
  width: 600px;
  display: block;
  position: relative;
  margin-bottom: -390px;

  @media screen and (max-width: 1400px) {
    margin-bottom: -300px;
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
  font-size: 0.8rem;
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
  height: 1425px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export default Garden;
