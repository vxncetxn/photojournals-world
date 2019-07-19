import React from "react";
import styled from "styled-components";

import EntriesList from "./EntriesList";
import TitleSection from "./TitleSection";

const Panel = styled.div`
  height: 100vh;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  //   border: 1px solid red;
  vertical-align: top;
`;

const PanelComp = () => {
  return (
    <Panel>
      <EntriesList />
      <TitleSection />
    </Panel>
  );
};

export default PanelComp;
