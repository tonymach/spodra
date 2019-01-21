import React from "react";
import styled from "styled-components";

const Navigation = props => {
  return (
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
};

/**
 *
 * Styled Components
 *
 */
const NavigationWrapper = styled.nav``;

const List = styled.ul``;

const ListItem = styled.li``;

const Link = styled.a``;

export default Navigation;
