import React from "react";
import styled from "styled-components";

const SectionThree = ({ image }) => {
  return (
    <SectionThreeWrapper>
      <LargeScale>&</LargeScale>
    </SectionThreeWrapper>
  );
};

/* Styled Components */
const SectionThreeWrapper = styled.div`
  height: 20vh;
  text-align: center;
  display: relative;
  margin-top: -20vh;
`;

const LargeScale = styled.h1`
  color: #fff;
  font-size: 40em;
`;

export default SectionThree;
