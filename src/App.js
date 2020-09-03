import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import MainPage from "./main-page";

WebFont.load({
  google: {
    families: ["Arial Web:300,400,700", "sans-serif"],
  },
});

const Container = styled.div`
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    background-size: cover;
    clip-path: polygon(0% 0%, 100% 0%, 0% 600px);
  }
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Arial", sans-serif;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

export default App;
