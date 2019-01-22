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

const ImageWrapper = styled.div`
  background-image: url(${props => props.image});
  background-size: 115%;
  background-position: top center;
  background-repeat: no-repeat;
  height: 100%;
  margin-left: 94px;
`;

const ImageBox = styled.div`
  height: 86vh;
  margin-top: 40px;
  margin-left: 40px;
`;

// Wraps two sides
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigText = styled.h1`
  font-size: 110px;
  padding-left: 120px;
  color: #10069F;
  font-weight: bold;
  margin-right: 127px;
`;

const CircleImage = styled.img`
  height: 500px;
`;

const CircleContainer = styled.div`
  margin-right: 140px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

// const Circle = styled.div`
//   height: 400px;
//   width: 400px;
//   flex-wrap: wrap;
//   border: 30px solid #FFCD00;
//   border-radius: 50%;
// `;

// const InnerCircle = styled.div`
//
// `;

export default ImageBoard;
