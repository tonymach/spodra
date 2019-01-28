import React from "react";
import styled from "styled-components";

const Navigation = _ => (
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
    </List>
  </NavigationWrapper>
);

/**
 *
 * Styled Components
 *
 */
const NavigationWrapper = styled.nav`
  margin-right: 170px;
  font-family: "HK Grotesk Medium", sans-serif;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: #7ed6df;
  }
`;

export default Navigation;
