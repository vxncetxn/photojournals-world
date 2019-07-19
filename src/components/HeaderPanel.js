import React from "react";
import styled from "styled-components";

const HeaderPanel = styled.div`
  display: inline-block;
  //   border: 1px solid gold;
`;

const HeaderOne = styled.h1`
  display: inline;
  font-family: var(--font-secondary), sans-serif;
  font-size: 8rem;
  //   color: #6aa46a;
  color: #5b955b;
  line-height: 1.1;
  //   border-right: 2px solid red;
`;

const SpanOne = styled.span`
  font-size: 5rem;
  color: #a46a6a;
  vertical-align: baseline;
  //   border: 1px solid red;

  & span {
    vertical-align: baseline;
    display: inline-block;
    border-bottom: 2px dashed #a46a6a;
    cursor: pointer;
  }
`;

const HeaderPanelComp = () => {
  return (
    <HeaderPanel>
      <HeaderOne>photo</HeaderOne>
      <br />
      <HeaderOne>journals</HeaderOne>
      <br />
      <HeaderOne>
        .dev,{" "}
        <SpanOne>
          by <span>vance</span>.
        </SpanOne>
      </HeaderOne>
    </HeaderPanel>
  );
};

export default HeaderPanelComp;
