import React from "react";
import styled from "styled-components";

import CircleImageURL from "../Assets/Images/bigCircle.png";

const ImageBoard = props => {
  return (
    <ImageBox>
      <ImageWrapper image={props.image}>
        <ContentWrapper>
          <BigText>
            Din
            <br />
            Service
            <br />
            Partner
            <br />
            I Stockholm
          </BigText>

          <CircleContainer>
            <CircleImage src={CircleImageURL} alt="CircleImage" />
          </CircleContainer>
        </ContentWrapper>
      </ImageWrapper>
    </ImageBox>
  );
};

/* Styled Components */
const ImageWrapper = styled.div`
  background-image: url(${props => props.image});
  background-size: 115%;
  background-position: top center;
  background-repeat: no-repeat;
  height: 100%;
`;

const ImageBox = styled.div`
  height: 86vh;
  margin-top: 40px;
  position: relative;
`;

// Wraps two sides
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigText = styled.h1`
  font-size: 3.5rem;
  padding-left: 120px;
  color: #10069F;
  font-weight: bold;
  margin-right: 127px;

  @media screen and (max-width: 1400px) {
    font-size: 2.6rem;
  }
`;

const CircleImage = styled.img`
  height: 500px;

  @media screen and (max-width: 1400px) {
    height: 350px;
  }
`;

const CircleContainer = styled.div`
  margin-right: 140px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default ImageBoard;
