import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import * as emailjs from "emailjs-com";
import Switch from "react-switch";
import TimePicker from 'react-times';
import moment from "moment";
import swal from 'sweetalert';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/sv';

import 'react-times/css/material/default.css';// import moment from "moment";

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
      sent: false,
      hour: '11',
      minute: '50',
      meridiem: '',
      focused:'',
      timezone:'',
      selectedDay: undefined,
      disabled: false
    };

    this.handleDayClick = this.handleDayClick.bind(this);
}


handleDayClick(day, { selected }) {
   if (selected) {
     // Unselect the day if already selected
     this.setState({ date: undefined });
     return;
   }
   this.setState({ date: day });
 }
  //

  boolCleaning(bool) {
    if (bool) return " Ja";
    return " Nej";
  }

  filterWords() {
    var t = this.state;
    var f = this.state;
    f.cleaning = this.boolCleaning(t.cleaning);
    f.moving = this.boolCleaning(t.moving);
    f.garden = this.boolCleaning(t.garden);
    moment.locale("sv");
    f.date = moment(t.date).format("MMM Do YY"); // Jan 30th 19
    return f;
  }

  // Sends an email of the state above to the @info email
  doIt = e => {
    e.preventDefault();
    this.setState({disabled:true});
    const twoPrecent = this.filterWords();
    swal("Skickat!", "fantastisk", "success");
    emailjs
      .send(
        "mailgun",
        "template_qSXVYhqQ",
        twoPrecent,
        "user_33y4IdJtVCRtMnuhPQf2p"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
          this.setState(_ => ({ sent: true }));
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // UI Level interaction



  onTimeChange(options) {
    console.log(options);
    const {
        hour,
        minute,
        meridiem
      } = options;
      console.log(hour);
      this.setState({'hour':hour});
      this.setState({'minute':minute});

      }

  onFocusChange(focusStatue) {
    // do something
  }

  // Set the date entered by the user
  onChangeDate = date => this.setState({ date });

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
    const {
  hour,
  minute,

} = this.state;
    return (

      <Modal
        open={this.props.open && !this.state.sent}
        closeOnEsc
        showCloseIcon
        onClose={this.props.onClose}
        center
      >

        <DesignerModal>
          <Title>ANGE DATUM, TID, SERVICE OCH KONTAKTUPPGIFTER</Title>

          <FormWrapper>
            <LeftSide>

              <DayPicker
                onDayClick={this.handleDayClick}
               selectedDays={this.state.date}
               locale="sv"
               localeUtils={MomentLocaleUtils}
                  />
              <TimePicker
                  onTimeChange={this.onTimeChange.bind(this)}
                   time={hour && minute ? `${hour}:${minute}` : null}
                   colorPalette="dark"
                />
            </LeftSide>

            <RightSide>

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

                </Fragment>


              <Boka onClick={this.doIt} state={this.state} disabled={this.state.disabled}>
                Att Boka
              </Boka>
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
  margin-top: 20px;
  margin-right: 200px;
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
  width: 800px;
  height: 500px;

  @media screen and (max-width: 1400px) {
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  padding-top:40px;

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
    background: #4cd137;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const TimePickerContainer = styled.div`
  margin-top: 50px;
  margin-right: 100px;
`;

export default Calendar;
