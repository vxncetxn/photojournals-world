import React from "react";
import styled from "styled-components";

const TitleSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  //   border: 1px solid gold;
`;

const Title = styled.h1`
  display: inline;
  font-family: var(--font-secondary), sans-serif;
  font-size: 8rem;
  color: var(--color-primary);
  line-height: 1.1;
  //   border-right: 2px solid red;
`;

const TitleSpan = styled.span`
  font-size: 5rem;
  color: var(--color-secondary);
  //   border: 1px solid red;

  & span {
    display: inline-block;
    border-bottom: 2px dashed var(--color-secondary);
    cursor: pointer;
  }
`;

const TitleSectionComp = () => {
  return (
    <TitleSection>
      <Title>photo</Title>
      <Title>journals</Title>
      <Title>
        .dev,{" "}
        <TitleSpan>
          by <span>vance</span>.
        </TitleSpan>
      </Title>
    </TitleSection>
  );
};

export default TitleSectionComp;
