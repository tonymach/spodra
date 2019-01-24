import React, { Fragment } from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
import ImageBoard from "./Components/ImageBoard";
import Cleaning from "./Components/Cleaning";
import RelocationAssistance from "./Components/RelocationAssistance";
import Garden from "./Components/Garden";
import BusinessCard from "./Components/BusinessCard";

// Images Imports
import image1 from "./images/1.jpg";
import image2 from "./images/6.jpg";
import image3 from "./images/2.jpg";

const App = _ => (
  <Fragment>
    <Header />
    <Sidebar />

    <MainWrapper>
      <ImageBoard image={image1} />
      <SectionOne image={image2} />
      <SectionTwo />
      <SectionThree />
      <SectionFour image={image3} />
      <SectionFive />
      <Cleaning />
      <RelocationAssistance />
      <Garden />
      <BusinessCard />
    </MainWrapper>
  </Fragment>
);

/* Styled Components */
const MainWrapper = styled.div`
  background: #f5f5f5;
  margin-left: 140px;
  height: 10000px;
`;

export default App;
