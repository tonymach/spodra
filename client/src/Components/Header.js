import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Boka from "./Boka";
import LogoImage from "../Assets/Images/logox2.png";

const Header = props => {
  return (
    <HeaderWrapper>
      <ContentWrapper>
        <HeaderContainer>
          <Logo src={LogoImage} alt="Spodralux Logo" />
          <Navigation />
        </HeaderContainer>

        <BokaWrapper onClick={props.action}>
          <Boka />
        </BokaWrapper>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

/**
 *
 * Styled Components
 *
 */
const HeaderWrapper = styled.header`
  height: 80px;
  background: #10069F;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 140px;
`;

const BokaWrapper = styled.div`
  background: #00BF6F;
  height: 100%;
  width: 540px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Header;
