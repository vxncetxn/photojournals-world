import React from "react";
import styled from "styled-components";

import InfoPanel from "./InfoPanel";
import HeaderPanel from "./HeaderPanel";

const Panel = styled.div`
  height: 100vh;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 50px 50px 50px;
  //   border: 1px solid red;
  vertical-align: top;
`;

const PanelComp = () => {
  return (
    <Panel>
      <InfoPanel />
      <HeaderPanel />
    </Panel>
  );
};

export default PanelComp;
