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
  grid-template-columns: repeat(2, 50%);
  justify-items: last baseline;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 65% auto;
  align-items: center;
  justify-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 140px;
`;

const BokaWrapper = styled.div`
  background: #00bf6f;
  height: 100%;
  width: 540px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background: #019c5b;
  }
`;

export default Header;
