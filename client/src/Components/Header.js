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
<<<<<<< HEAD
 *
 * Styled Components
 *
=======
<<<<<<< HEAD
 * 
 * Styled Components
 * 
=======
 * Styled Components
 *
>>>>>>> origin/nav
>>>>>>> e2952df5caf0409c340462a4e510d8289b6b5026
 */
const HeaderWrapper = styled.header`
  height: 80px;
  background: #10069F;
`;

const Logo = styled.img`
  height: 40px;
`;

export default Header;
