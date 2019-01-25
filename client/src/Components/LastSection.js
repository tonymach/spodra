import React from "react";
import styled from "styled-components";

import lastImageURL from "../Assets/Images/lastImage2x.png";

const LastSection = _ => (
  <Wrapper>
    <LeftSide>
      <LeftSideTitle>IKDIENĀ MUMS UZTICAS</LeftSideTitle>
      
      <LeftSideCard>
        <h1>Hello World</h1>
      </LeftSideCard>
      
      <LeftSideCard>
        <h1>Hello World</h1>
      </LeftSideCard>
      
      <LeftSideCard>
        <h1>Hello World</h1>
      </LeftSideCard>
    </LeftSide>

    <RightSide>
      <RightSideImage src={lastImageURL} alt="last image" />
    </RightSide>
  </Wrapper>
); 

/**
 * 
 * Styled Components
 * 
 */
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1228px;
  height: 763px; 
  margin-left: 150px;
  margin-top: 77px;
`;

const LeftSide = styled.div``;

const LeftSideTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 22px;
  color: #10069F;
  margin-bottom: 16px;
`;

const LeftSideCard = styled.div`
  height: 100px;
  width: 260px;
  background: #CCCCCC;
  margin-bottom: 16px;
`;

const RightSide = styled.div``;

const RightSideImage = styled.img`
  margin-top: 40px; 
`;

export default LastSection;
