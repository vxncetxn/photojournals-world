import React from "react";
import styled from "styled-components";

const EntriesList = styled.ul`
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
  // border: 1px solid red;
`;

const Entry = styled.li`
  font-family: var(--font-secondary);
  font-size: 2.6rem;
  color: ${props => props.color};

  & a {
    color: ${props => props.color};
    cursor: pointer;
    // border: 1px solid green;
  }
`;

const EntriesListComp = () => {
  return (
    <EntriesList>
      <Entry color="var(--color-secondary)">entries</Entry>
      <Entry color="hsl(340, 60%, 51%)">
        <a href="/">#europe2k19</a>
      </Entry>
      <Entry color="hsl(220, 60%, 52%)">
        <a href="/">#taiwanexchange</a>
      </Entry>
    </EntriesList>
  );
};

export default EntriesListComp;
