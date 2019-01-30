import React, { Fragment, Component } from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
// import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
import ImageBoard from "./Components/ImageBoard";
import Cleaning from "./Components/Cleaning";
import RelocationAssistance from "./Components/RelocationAssistance";
import Garden from "./Components/Garden";
import BusinessCard from "./Components/BusinessCard";
import LastSection from "./Components/LastSection";
import Calendar from "./Components/Calendar";

// Images Imports
import image1 from "./images/1.jpg";
import image2 from "./images/6.jpg";
import image3 from "./images/2.jpg";

export default class App extends Component {
  state = {
    open: true
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
        <Header action={this.onOpenModal} />

        <Wrapper>
          <Sidebar />

          <MainWrapper>
            <ImageBoard image={image1} />
            <SectionOne image={image2} />
            <SectionTwo />
            <SectionFour image={image3} />
            <SectionFive onClick={this.onOpenModal} />
            <Cleaning openModal={this.onOpenModal} />
            <RelocationAssistance openModal={this.onOpenModal} />
            <Garden openModal={this.onOpenModal} />
            <BusinessCard />
            <LastSection />
            <Calendar
              onOpen={this.onOpenModal}
              onClose={this.onCloseModal}
              open={this.state.open}
            />
          </MainWrapper>
        </Wrapper>

      </Fragment>
    );
  }
}

/* Styled Components */
const Wrapper = styled.div`
  display: grid;
`;

const MainWrapper = styled.div`
  background: #f5f5f5;
  margin-top: 20px;
  width: 94.7%;
  justify-self: right;
`;
