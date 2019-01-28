import React from "react";
import styled from "styled-components";

import LetterAImage from "../Assets/Images/letter_A_2x.png";
import LetterBImage from "../Assets/Images/letter_B_2x.png";

const Sidebar = _ => (
  <SidebarContainer>
    <LetterA src={LetterAImage} alt="A" />
    <SidebarLine />
    <LetterB src={LetterBImage} alt="B" />
  </SidebarContainer>
);

/**
 *
 * Styled Components
 *
 */
const SidebarContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 25px;
  
  @media screen and (max-width: 1400px) {
    left: 15px;
  }
`;

const SidebarLine = styled.div`
  background-color: #10069f;
  min-width: 5px;
  height: 9540px;
  display: block;

  @media screen and (max-width: 1400px) {
    height: 9150px;
  }
`;

const LetterA = styled.img`
  width: 30px;
  margin-bottom: 10px;
`;

const LetterB = styled.img`
  width: 28px;
  margin-top: 10px;
  margin-left: 5px;
`;

export default Sidebar;
