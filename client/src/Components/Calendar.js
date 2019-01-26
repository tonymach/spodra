import React, {Component} from "react";
import styled from "styled-components";
import ReactCalendar from "react-calendar";
import Modal from 'react-responsive-modal';

class Calendar extends Component {
  constructor(props) {
    super(props);
    console.log(props.state)
  };
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (

      <Modal open={this.props.open} onClose={this.props.onClose} center>
                <h2>Simple centered modal</h2>

    <ReactCalendar
        locale="sv-SV"
        onChange={this.onChange}
        value={this.state.date}
        />

                </Modal>
    )   };
   };

  export default Calendar;
