import React from "react";
import styled from "styled-components";

const EntriesList = styled.ul`
  position: relative;
  z-index: 1;
  display: inline-block;
  //   border: 1px solid green;
`;

const Entry = styled.li`
  font-family: var(--font-secondary);
  font-size: 2.6rem;
  color: ${props => props.color};
  cursor: pointer;
`;

const EntriesListComp = () => {
  return (
    <EntriesList>
      <Entry color="var(--color-secondary)">entries</Entry>
      <Entry color="hsl(340, 60%, 51%)">#europe2k19</Entry>
      <Entry color="hsl(220, 60%, 52%)">#taiwanexchange</Entry>
    </EntriesList>
  );
};

export default EntriesListComp;
