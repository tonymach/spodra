import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import * as emailjs from "emailjs-com";
import Switch from "react-switch";
import { Calendar as ExternalCalendar } from "react-calendar";
import PickyDateTime from "react-picky-date-time";

// import moment from "moment";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      email: "",
      cleaning: false,
      moving: false,
      garden: false,
      checked: false,
      phone: "",
      hours: null,
      minutes: null,
      seconds: null,
      toggleTime: false
    };
  }

  // Toggles the time PickyTime component
  toggleTime = _ => this.setState(_ => ({ toggleTime: true }));

  // Set the date entered by the user
  onChangeDate = date => this.setState({ date });

  // Sends an email of the state above to the @info email
  doIt(e, state) {
    e.preventDefault();
    emailjs
      .send(
        "mailgun",
        "template_qSXVYhqQ",
        this.state,
        "user_33y4IdJtVCRtMnuhPQf2p"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  }

  handleLaundry = cleaning => {
    this.setState({ cleaning });
  };

  handleMoving = moving => {
    this.setState({ moving });
  };

  handleGarden = garden => {
    this.setState({ garden });
  };

  handlePhone = event => {
    this.setState({ phone: event.target.value });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <Modal open={this.props.open} onClose={this.props.onClose} center>
        <DesignerModal>
          <Title>ANGE DATUM, TID, SERVICE OCH KONTAKTUPPGIFTER</Title>

          <FormWrapper>
            <LeftSide>
              <ExternalCalendar
                className="calendar"
                onChange={this.onChangeDate}
              />
            </LeftSide>

            <RightSide>
              {this.state.toggleTime ? (
                <PickyDateTime
                  size="xs"
                  mode={2}
                  show
                  onClose={_ => this.setState(_ => ({ toggleTime: false }))}
                  onHourChange={res =>
                    this.setState(_ => ({ hours: res.value } ))
                  }
                  onMinuteChange={res =>
                    this.setState(_ => ({  minutes: res.value }))
                  }
                  onSecondChange={res => 
                    this.setState(_ => ({ seconds: res.value }))
                  }
                />
              ) : (
                <Fragment>
                  <SwitchWrapper>
                    <SwitchLabel htmlFor="cleaning">
                      <Switch
                        width={60}
                        height={30}
                        offColor="#808080"
                        onColor="#10069F"
                        onChange={this.handleLaundry}
                        checked={this.state.cleaning}
                        id="cleaning-switch"
                      />
                      <SSpan>STÄDHJÄLP</SSpan>
                    </SwitchLabel>
                    <SwitchLabel htmlFor="moving">
                      <Switch
                        width={60}
                        height={30}
                        offColor="#808080"
                        onColor="#10069F"
                        onChange={this.handleMoving}
                        checked={this.state.moving}
                        id="moving-switch"
                      />
                      <SSpan>FLYTTHJÄLP</SSpan>
                    </SwitchLabel>
                    <SwitchLabel htmlFor="garden">
                      <Switch
                        width={60}
                        height={30}
                        offColor="#808080"
                        onColor="#10069F"
                        onChange={this.handleGarden}
                        checked={this.state.garden}
                        id="garden-switch"
                      />
                      <SSpan>TRÄDGÅRD</SSpan>
                    </SwitchLabel>
                  </SwitchWrapper>
                  <InputNoTop
                    value={this.state.phone}
                    onChange={this.handlePhone}
                    placeholder="DITT TELEFONNUMMER"
                    type="phone"
                    required
                  />
                  <InputNoTop
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder="ELLER E-POSTADRESS"
                    type="email"
                    required
                  />
                  <ToggleTimeButton onClick={this.toggleTime}>
                    Choose Time
                  </ToggleTimeButton>
                </Fragment>
              )}

              <Boka state={this.state}>Att Boka</Boka>
            </RightSide>
          </FormWrapper>
        </DesignerModal>
      </Modal>
    );
  }
}

/**
 *
 * Styled Components
 *
 */
const ToggleTimeButton = styled.button`
  padding: 5px;
  position: absolute;
  left: 430px;
  margin-top: 20px;
  width: 200px;
  background: #4834d4;
  border: 0px;
  color: white;
  height: 50px;
  cursor: pointer;
  outline: 0;

  &::-moz-focus-inner {
    border: 0;
  }
`;

const Title = styled.h6`
  margin: 2px;
  color: #cccccc;
`;

const DesignerModal = styled.div`
  text-align: center;
  width: 50vw;
  height: 60vh;

  @media screen and (max-width: 1400px) {
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;

  .calendar {
    height: 400px;
    width: 350px;
    margin-top: 40px;
    padding: 10px;

    @media screen and (max-width: 1400px) {
      margin-top: 40px;
      padding: 10px;
      font-size: 0.5rem;
    }
  }
`;

const RightSide = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 1400px) {
    margin-right: 30px;
    margin-left: 50px;
  }
`;

const SwitchLabel = styled.label`
  display: flex !important;
  align-items: center;
  margin: 7px;
  width: 100%;
  font-size: 12px;
`;

const SwitchWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-rows: repeat(3, 25%);
`;

const SSpan = styled.span`
  font-size: 1.2em;
  margin-left: 20px;
  color: #808080;
`;

const InputNoTop = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  margin-top: 30px;
  display: block;
  background-color: transparent;
  font-size: 0.8em;
  color: #10069f;
  outline: 0;

  &--moz-placeholder {
    color: #10069f;
  }

  &::placeholder {
    color: #10069f;
  }
`;

const Boka = styled.button`
  position: absolute;
  bottom: -70px;
  right: 0;

  width: 260px;
  height: 70px;
  outline: 0;
  background: #00bf6f;
  color: white;
  font-size: 34px;
  font-family: "HK Grotesk Bold", sans-serif;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-5px);
    border-bottom: 10px solid #00bf6f;
  }

  &:active {
    transform: translateY(1px);
    border-bottom: 6px solid #00bf6f;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export default Calendar;
