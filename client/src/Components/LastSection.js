import React from "react";
import styled from "styled-components";

import lastImageURL from "../Assets/Images/lastImage2x.png";

const LastSection = _ => (
  <Wrapper>
    <LeftSide>
      <LeftSideTitle>IKDIENĀ MUMS UZTICAS</LeftSideTitle>

      <LeftSideCard>
        <h1> </h1>
      </LeftSideCard>

      <LeftSideCard>
        <h1> </h1>
      </LeftSideCard>

      <LeftSideCard>
        <h1> </h1>
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
  margin-top: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  height: 760px;
  width: 100%;
  padding: 0px 0px 0px 150px;
`;

const LeftSideTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 1rem;
  color: #10069f;
  margin-bottom: 16px;
`;

const LeftSideCard = styled.div`
  height: 100px;
  width: 260px;
  background: #cccccc;
  margin-bottom: 16px;
  margin-right: 20px;
`;

const RightSide = styled.div`
  position: relative;
  height: auto;
  width: auto;
`;

const RightSideImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default LastSection;
