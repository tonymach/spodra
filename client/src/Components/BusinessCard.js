import React from "react";
import styled from "styled-components";

const BusinessCard = _ => (
  <Wrapper>
    <Container>
      <Content>
        <LeftSide>
          <LeftSideTitle>Ja mes varam ietaupit jusu laiku</LeftSideTitle>
          <HR />
        </LeftSide>
        <RightSide>
          <CompanyName>STOCKHOLM</CompanyName>
          <br />
          <br />
          <CompanyInfo>Lännavägen 113, 141 46 Huddinge</CompanyInfo>
          <CompanyInfo>Tel: 08 774 18 03</CompanyInfo>
          <CompanyInfo>Tel: 0707 413 772</CompanyInfo>
          <CompanyInfo>E-post: info@spodra.se</CompanyInfo>
          <br />
          <br />
          <CompanyLink
            target="__blank"
            href="https://www.google.com/maps/place/Spodra+LUX+AB/@59.2254531,17.999009,17z/data=!4m13!1m7!3m6!1s0x465f70bb2f05cd47:0x4cb3a31abd7990a8!2sL%C3%A4nnav%C3%A4gen+113,+141+34+Huddinge!3b1!8m2!3d59.2254531!4d18.001203!3m4!1s0x465f70bb2f9d814b:0x9f0b75be2c8085be!8m2!3d59.2253339!4d18.0006111"
          >
            VISA GOOGLE MAPS
          </CompanyLink>
        </RightSide>
      </Content>
    </Container>
  </Wrapper>
);

/**
 *
 * Styled Components
 *
 */
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  display: block;
  margin: 190px auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftSide = styled.div`
  width: 70%;
`;

const LeftSideTitle = styled.h1`
  font-family: "Butler Medium", serif;
  font-size: 2.2rem;
  margin-bottom: 100px;
  color: #10069f;

  @media screen and (max-width: 1400px) {
    font-size: 1.8rem;
  }
`;

const HR = styled.hr`
  background: #10069f;
  height: 2px;
`;

const RightSide = styled.div`
  color: #10069f;
  padding-left: 120px;
`;

const CompanyName = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.5rem;
  }
`;

const CompanyInfo = styled.p`
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 1rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }
`;

const CompanyLink = styled.a`
  text-decoration: none;
  font-family: "HK Grotesk Bold", sans-serif;
  font-weight: bold;
  color: #10069f;
  outline: 0;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 0.8rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.6rem;
  }

  &:hover {
    color: rgba(21, 6, 243, 0.5);
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export default BusinessCard;
