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
  margin-left: 40px;
  margin-top: 40px;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarLine = styled.div`
  background-color: #10069f;
  min-width: 10px;
  height: 9540px;
  display: block;
`;

const LetterA = styled.img`
  width: 60px;
  margin-bottom: 23px;
`;

const LetterB = styled.img`
  width: 46px;
  margin-top: 23px;
  margin-left: 12px;
`;

export default Sidebar;
