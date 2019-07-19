import React from "react";
import styled from "styled-components";

const Tooltip = styled.div`
  position: relative;
  max-width: 200px;
  background-color: #1b4b45;
  //   background-color: #0e2522;
  font-family: var(--font-secondary), sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-secondary);
  //   color: hsl(340, 60%, 51%);
  padding: 16px;
  border-radius: 5px;

  & > * + * {
    margin-top: 6px;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    background: #1b4b45;
    border: 1px solid #1b4b45;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-50%, 50%) rotate(45deg);
    transform-origin: center center;
    z-index: 10;
  }
`;

const TooltipComp = ({ tag, name, places }) => {
  return (
    <Tooltip id="tooltip">
      <div style={{ color: "hsl(340, 60%, 51%)" }}>{`#${tag}`}</div>
      <div>{`${name}: ${places}`}</div>
    </Tooltip>
  );
};

export default TooltipComp;
