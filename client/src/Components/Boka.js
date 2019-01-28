import React, { Fragment } from "react";
import styled from "styled-components";

import BokaIcon from "../Assets/Images/boka2x.png";

const Boka = ({ onClick }) => (
  <Fragment>
    <BokaImage src={BokaIcon} alt="Att Boka" onClick={onClick} />
    <BokaTitle>Att Boka</BokaTitle>
  </Fragment>
);

/**
 *
 * Styled Components
 *
 */
const BokaImage = styled.img`
  margin-right: 16px;
  height: 55px;

  @media screen and (max-width: 1200px) {
    height: 45px;
  }
`;

const BokaTitle = styled.span`
  font-family: "HK Grotesk Bold", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 1rem;

  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }
`;

export default Boka;
