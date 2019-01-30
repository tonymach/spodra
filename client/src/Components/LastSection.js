import React from "react";
import styled from "styled-components";
import lastImageURL from "../Assets/Images/lastImage2x.png";

const LastSection = _ => (
  <Wrapper>
    <LeftSide>
      <LeftSideTitle>IKDIENĀ MUMS UZTICAS</LeftSideTitle>

      <LeftSideCard>
        <CompanyLink href="https://storex.se/"><ImageCard src="https://storex.se/wp-content/uploads/2017/01/Storex_logo-3.png"/></CompanyLink>
      </LeftSideCard>

      <LeftSideCard>
        <CompanyLink href="https://easyflat.se/"><ImageCard src="http://www.easyflat.se/wp-content/uploads/2016/12/custom-logo-300x64.png"/></CompanyLink>      </LeftSideCard>

      <LeftSideCard>
        <CompanyLink href="https://smartbox.se/"><ImageCard src="https://www.smartbox.se/imgs/brandstyle/smartbox/logo.svg"/></CompanyLink>      </LeftSideCard>
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

  @media screen and (max-width: 1400px) {
    margin-top: 200px;
  }
`;

const LeftSide = styled.div`
  height: 760px;
  width: 100%;
  padding: 0px 0px 0px 150px;

  @media screen and (max-width: 1400px) {
    height: 400px;
  }
`;

const LeftSideTitle = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 1rem;
  color: #10069f;
  margin-bottom: 16px;

  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }
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

  @media screen and (max-width: 1400px) {
    width: 700px;
  }
`;

const ImageCard = styled.img`
  margin-top:7%;
  max-width:100%;

`;


const CompanyName = styled.h1``;

const CompanyLink = styled.a``;

export default LastSection;
