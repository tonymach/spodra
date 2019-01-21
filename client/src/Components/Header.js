import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Boka from "./Boka";
import LogoImage from "../Assets/Images/logox2.png";

const Header = props => {
  return (
    <HeaderWrapper>
      <div className="container">

        <ContentWrapper>
          <HeaderContainer>
            <Logo src={LogoImage} alt="Spodralux Logo" />
            <Navigation />
          </HeaderContainer>

          <BokaWrapper>
            <Boka />
          </BokaWrapper>
        </ContentWrapper>

      </div>
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
  display grid;
  grid-template-columns: 80% 20%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const BokaWrapper = styled.div`
  background: #00BF6F;
`;

export default Header;
