import React from "react";
import styled from "styled-components";

import MainPage from "./main-page";

const Container = styled.div`
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    clip-path: polygon(0% 0%, 100% 0%, 0% 800px);
    background-size: cover;
  }
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Arial", sans-serif;
`;

function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

export default App;
