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
  z-index: 999;

  & > * + * {
    margin-top: 6px;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: ${props =>
      props.position === "to-top"
        ? "0"
        : props.position === "to-bottom"
        ? "100%"
        : "50%"};
    left: ${props =>
      props.position === "to-left"
        ? "100%"
        : props.position === "to-right"
        ? "0"
        : "50%"};
    width: 12px;
    height: 12px;
    background: #1b4b45;
    border: 1px solid #1b4b45;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-50%, 50%) rotate(45deg);
    transform-origin: center center;
    z-index: 999;
  }
`;

const TooltipComp = ({ position, tag, name, places }) => {
  return (
    <Tooltip id="tooltip" position={position}>
      <div style={{ color: "hsl(340, 60%, 51%)" }}>{`#${tag}`}</div>
      <div>{`${name}: ${places}`}</div>
    </Tooltip>
  );
};

export default TooltipComp;
