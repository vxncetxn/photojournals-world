import React from "react";
import styled from "styled-components";

const InfoPanel = styled.div`
  display: inline-block;
  //   border: 1px solid green;
`;

const One = styled.h1`
  font-family: var(--font-secondary);
  font-size: 2.6rem;
  color: ${props => props.color};
`;

// const SpanHere = styled.span`
//   color: ${props => props.color};
// `;

const InfoPanelComp = () => {
  return (
    <InfoPanel>
      <One color="#a46a6a">entries</One>
      <One color="hsl(340, 60%, 51%)">#europe2k19</One>
      <One color="hsl(220, 60%, 52%)">#taiwanexchange</One>
    </InfoPanel>
  );
};

export default InfoPanelComp;
