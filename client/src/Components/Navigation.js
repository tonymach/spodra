import React, { useState } from "react";
import styled from "styled-components";
import PDF from "react-pdf-js";

import Modal from "./Modal";
import Toggle from "../Utils/Toggle";
import PrisPDF from "../Assets/Files/pris.pdf";

const Navigation = _ => {
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);

  // Functions
  const onDocumentComplete = pages => {
    setPage(1);
    setPages(pages);
  };

  const handlePrevious = _ => setPage(currentPage => page - 1);
  const handleNext = _ => setPage(currentPage => currentPage + 1);

  // Pagination rendering logic
  const renderPagination = (page, pages) => {
    let previousButton = <button onClick={handlePrevious}>Previous</button>;
    let nextButton = <button onClick={handleNext}>Next</button>;

    if (page === 1)
      previousButton = (
        <button disabled onClick={handlePrevious}>
          Previous
        </button>
      );

    if (page === pages)
      nextButton = (
        <button disabled onClick={handleNext}>
          Next
        </button>
      );

    return (
      <nav>
        <ul>
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };

  // Handle the pagination render
  let pagination = null;
  if (pages) pagination = renderPagination(page, pages);

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
          <Toggle>
            {({ on, toggle }) =>
              on ? (
                <Modal toggle={toggle}>
                  <PDF
                    file={PrisPDF}
                    page={page}
                    onDocumentComplete={onDocumentComplete}
                  />
                  {pagination}
                </Modal>
              ) : (
                <PrisButton onClick={toggle}>Pris</PrisButton>
              )
            }
          </Toggle>
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
