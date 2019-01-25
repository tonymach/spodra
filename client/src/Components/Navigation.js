import React from "react";
import styled from "styled-components";

const Navigation = _ => (
  <NavigationWrapper>
    <List>
      <ListItem>
        <Link>STÄDHJÄLP</Link>
      </ListItem>

      <ListItem>
        <Link>FLYTTHJÄLP</Link>
      </ListItem>

      <ListItem>
        <Link>TRÄDGÅRD</Link>
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
`;

export default Navigation;
