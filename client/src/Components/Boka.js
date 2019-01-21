import React, { Fragment } from 'react';
import styled from "styled-components";

import BokaIcon from "../Assets/Images/boka2x.png";

const Boka = (props) => {
  return (
    <Fragment>
      <BokaImage src={BokaIcon} alt="Att Boka" />
      <BokaTitle>Att Boka</BokaTitle>
    </Fragment>
  )
}

/**
 *
 * Styled Components
 *
 */

const BokaImage = styled.img`
  margin-right: 16px;
  height: 55px;
`;

const BokaTitle = styled.span``;

export default Boka
