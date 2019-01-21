import React from "react";
import styled from "styled-components";

const ImageBoard = props => {

  return (
    <ImageBox>
      <ImageWrapper image={props.image}>

      </ ImageWrapper>
    </ ImageBox >
  );

};


const ImageWrapper = styled.div`

  background-image: url(${props =>props.image});
  background-size:100% 100%;
  background-repeat: no-repeat;
  min-height:100%;
`;
const ImageBox = styled.div`
height:80vh;
margin: 40px;
`;

export default ImageBoard;
