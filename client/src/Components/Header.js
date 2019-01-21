import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import LogoImage from "../Assets/Images/logox2.png";

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo src={LogoImage} alt="Spodralux Logo" />
      <Navigation />
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

const Logo = styled.img`
  height: 40px;
`;

export default Header;
