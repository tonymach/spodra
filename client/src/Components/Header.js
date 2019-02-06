import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Boka from "./Boka";
import LogoImage from "../Assets/Images/logox2.png";

const Header = ({ action }) => (
  <HeaderWrapper>
    <ContentWrapper>
      <HeaderContainer>
        <Logo src={LogoImage} alt="Spodralux Logo" />
        <Navigation />
      </HeaderContainer>

      <BokaWrapper onClick={action}>
        <Boka />
      </BokaWrapper>
    </ContentWrapper>
  </HeaderWrapper>
);

/**
 *
 * Styled Components
 *
 */
const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background: #10069f;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 20%;
  align-items: center;
  justify-items: normal;

  @media only screen and (max-width: 1340px) {
    grid-template-columns: 40% 60%;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 5em;

  @media only screen and (max-width: 1340px) {
    margin-left: 2em;
  }
`;

const BokaWrapper = styled.div`
  background: #00bf6f;
  height: 100%;
  margin-left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background: #019c5b;
  }
  
  @media screen and (max-width: 1250px) {
    width: 430px;
  }

  @media screen and (max-width: 1100px) {
    width: 340px;
  }
`;

export default Header;
