import React, {Component} from "react";
import styled from "styled-components";
import Modal from 'react-responsive-modal';
import moment from "moment";
import * as emailjs from 'emailjs-com';
import DateTimePicker from 'react-datetime-picker';
import Switch from "react-switch";

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
      phone:"",
    }

    this.doIt = this.doIt.bind(this);
    this.handleMoving = this.handleMoving.bind(this);
    this.handleLaundry = this.handleLaundry.bind(this);
    this.handleGarden = this.handleGarden.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
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

  handleLaundry(cleaning) {
    this.setState({ cleaning });
    console.log(this.state);
  }
  handleMoving(moving) {
      this.setState({ moving });
      console.log(this.state);
    }

    handleGarden(garden) {
      this.setState({ garden });
      console.log(this.state);
    }

    handlePhone(event) {
    this.setState({phone: event.target.value});
    }

    handleEmail(event) {
      this.setState({email: event.target.value});
      console.log(this.state);
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
      <FormWrapper>

        <LeftSide>
        </LeftSide>

        <RightSide>

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
          <InputNoTop value={this.state.phone} onChange={this.handlePhone} placeholder="DITT TELEFONNUMMER" type="phone"/>
          <InputNoTop value={this.state.email} onChange={this.handleEmail} placeholder="ELLER E-POSTADRESS" type="email"/>


          <Boka state={this.state}> Att Boka </Boka>
        </RightSide>



      </FormWrapper>
    </DesignerModal>


                </Modal>
    )   };
   };

const Title = styled.h6`
margin: 2px;
color: #CCCCCC;
`;

 const DesignerModal = styled.div`
 text-align:center;
 width:40vw;
 height:50vh;

 `;

const LeftSide = styled.div`
width:100%;
height:100%;
`;
const RightSide = styled.div`
`;

const SwitchLabel = styled.label`

  display: flex!important;
  align-items: center;
margin:7px;
width:100%;
font-size: 12px;
`;

const SwitchWrapper = styled.div`
margin-top:100px;
display: grid;
grid-template-row: repeat(3, 25%);
`;

const SSpan = styled.span`
font-size:1.2em;
margin-left: 20px;
color:#808080;
`;


const InputNoTop = styled.input`
border-top:0;
border-left:0;
border-right:0;
width:100%;
margin-top:30px;
font-size: 0.8em;
color: #10069F;
`;


const Boka = styled.button`
position:absolute;
bottom:-70px;
right:0;

width: 260px;
height: 70px;
outline: 0;
background: #00BF6F;
color: white;
font-size: 34px;
font-family: "HK Grotesk Bold", sans-serif;
font-weight: bold;
border: 0px;
cursor: pointer;
transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
  transform: translateY(-5px);
  border-bottom: 10px solid #00BF6F);
}

&:active {
  transform: translateY(1px);
  border-bottom: 6px solid #00BF6F;
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
