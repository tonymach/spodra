import React, {Component} from "react";
import styled from "styled-components";
import Modal from 'react-responsive-modal';
import Switch from "react-switch";
import moment from "moment";
import * as emailjs from 'emailjs-com';
import DateTimePicker from 'react-datetime-picker';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      email: "x@anthonymachula.ca",
      name: "Frederick Orange"
    }
    this.doIt = this.doIt.bind(this);
  };

  onChangeDate = date => this.setState({ date });


// This send an email of the state above to the @info email
  doIt(e, state)  {
    e.preventDefault();
    console.log({state});
    emailjs.send('mailgun','template_qSXVYhqQ', this.state , 'user_33y4IdJtVCRtMnuhPQf2p')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }


  render() {
    console.log(this.state);
    return (

// This modal opens when the buttons are pressed
// DesignerModal is the form
// Only thing left is to style
// If you're able to add the styling everything else will litterally work just have to update the state

  <Modal open={this.props.open} onClose={this.props.onClose} center>
    <DesignerModal>
      <Title> ANGE DATUM, TID, SERVICE OCH KONTAKTUPPGIFTER </Title>
      <DateTimePicker
      onChange={this.onChange}
      value={this.state.date}
      locale="SV-sv"
    />


</DesignerModal>

<button onClick={this.doIt} state={this.state}> Test </button>

                </Modal>
    )   };
   };

const Title = styled.h5`
margin: 5px;
color: #CCCCCC;
`;

 const DesignerModal = styled.div`
 display:block;
 text-align:center;
 width:60vw;
 height:50vh;
 `;

  export default Calendar;
