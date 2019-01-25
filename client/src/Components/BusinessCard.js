import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <CompanyInfo>Lännavägen 64, 141 34, Huddinge</CompanyInfo>
          <CompanyInfo>Tel: 08 774 18 03</CompanyInfo>
          <CompanyInfo>Tel: 0707 413 772</CompanyInfo>
          <CompanyInfo>E-post: info@spodra.se</CompanyInfo>
          <br />
          <br />
          <CompanyLink target="__blank" href="https://www.google.com/maps/place/L%C3%A4nnav%C3%A4gen+64,+141+46+Huddinge,+Sweden/@59.2265761,17.9966624,17z/data=!4m5!3m4!1s0x465f70bafc5951d3:0xbdcff0df1e87962a!8m2!3d59.2265734!4d17.9988511">
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
  color: #10069F;
`;

const HR = styled.hr`
  background: #10069F;
  height: 2px;
`;

const RightSide = styled.div`
  color: #10069F;
  padding-left: 120px;
`;

const CompanyName = styled.h1`
  font-family: "HK Grotesk Bold", sans-serif;
  font-size: 0.8rem;
`;

const CompanyInfo = styled.p`
  font-family: "HK Grotesk Medium", sans-serif;
  font-size: 1rem;
`;

const CompanyLink = styled.a`
  text-decoration: none;
  font-family: "HK Grotesk Bold", sans-serif;
  font-weight: bold;
  color: #10069F;
  outline: 0;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 0.8rem;

  &:hover {
    color: rgba(21, 6, 243, 0.5);
  }

  &-::-moz-focus-inner {
    border: 0;
  }
`;

export default BusinessCard;
