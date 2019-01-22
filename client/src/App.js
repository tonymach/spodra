import React, { Fragment } from 'react';
import styled from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SectionOne from "./Components/SectionOne";
import ImageBoard from "./Components/ImageBoard";

// Images Imports
import image1 from "./images/1.jpg";
import image2 from "./images/6.jpg"

const App = props => {
  return (
    <Fragment>
      <Header />
      <Sidebar />

      <MainWrapper>
        <ImageBoard image={image1} />
        <SectionOne image={image2} />
      </MainWrapper>
    </Fragment>
  );
};

/* Styled Components */
const MainWrapper = styled.div`
  background: #F5F5F5;
  margin-left: 140px;
  height: 4000px;
`;

export default App;
