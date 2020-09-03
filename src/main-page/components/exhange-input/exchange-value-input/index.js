import React from "react";
import { Wrapper, Input, Currency } from "./index.style";

const ExchangeValueInput = (props) => {
  return (
    <Wrapper>
      <Input />
      <Currency onClick={() => props.changeInput()}>
        <img src="https://changenow.io/images/coins/eth.svg" />
        <span>ETX</span>
      </Currency>
    </Wrapper>
  );
};

export default ExchangeValueInput;
