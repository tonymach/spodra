import React from "react";
import styled from "styled-components";

import LetterAImage from "../Assets/Images/letter_A_2x.png";
import LetterBImage from "../Assets/Images/letter_B_2x.png";

const Sidebar = props => {
  return (
    <div className="sidebarContainer">
      <LetterA src={LetterAImage} alt="A" />
      <div className="sidebar" />
      <LetterB src={LetterBImage} alt="B" />
    </div>
  );
};

/* Styled Components */
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
