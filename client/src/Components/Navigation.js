import React, { Component } from "react";
import styled from "styled-components";
import Viewer from "react-viewer";
import "react-viewer/dist/index.css";

import PrisOne from "../Assets/Files/pris-1.jpg";
import PrisTwo from "../Assets/Files/pris-2.jpg";

class Navigation extends Component {
  state = { isVisible: false };
  
  render() {
    return (
      <NavigationWrapper>
        <List>
          <ListItem>
            <Link href="#cleaning">STÄDHJÄLP</Link>
          </ListItem>

          <ListItem>
            <Link href="#relocationAssistance">FLYTTHJÄLP</Link>
          </ListItem>

          <ListItem>
            <Link href="#garden">TRÄDGÅRD</Link>
          </ListItem>

          <ListItem>
            {this.state.isVisible ? (
              <Viewer
                images={[
                  { src: PrisOne, alt: "Pris One" },
                  { src: PrisTwo, alt: "Pris Two" }
                ]}
                visible={this.state.isVisible}
                zoomable
                drag={false}
                onClose={_ => this.setState(_ => ({ isVisible: false }))}
              />
            ) : (
              <PrisButton onClick={_ => this.setState(_ => ({ isVisible: true }))}>Pris</PrisButton>
            )}
          </ListItem>
        </List>
      </NavigationWrapper>
    );
  }
}

/**
 *
 * Styled Components
 *
 */
const NavigationWrapper = styled.nav`
  font-family: "HK Grotesk Medium", sans-serif;
`;

const List = styled.ul`
  width: 600px;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 5px;
`;

const Link = styled.a`
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: 0;

  @media screen and (max-width: 1200px) {
    font-size: 0.5rem;
  }

  &--moz-focus-inner {
    border: 0;
  }

  &:hover {
    color: #7ed6df;
  }
`;

const PrisButton = styled.button`
  padding: 10px;
  width: 100px;
  border: 1px solid #1e90ff;
  border-radius: 3px;
  background: #3742fa;
  color: white;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: 0;

  &::-moz-focus-inner {
    border: none;
  }

  &:hover {
    background: #1e90ff;
  }
`;

export default Navigation;
