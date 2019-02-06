import React from "react";
import styled from "styled-components";

import Portal from "../Utils/Portal";
import Toggle from "../Utils/Toggle";

const Modal = ({ children, toggle }) => (
  <Portal>
    <Wrapper onClick={toggle}>
      <Content>
        {children}
      </Content>
    </Wrapper>

    <Background />
  </Portal>
);

/**
 * 
 * Styled Component
 * 
 */
const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;  
  width: 100%;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
