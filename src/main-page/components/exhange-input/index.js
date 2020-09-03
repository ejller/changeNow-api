import React, { useState } from "react";

import CurrenciesInput from "./currencies-input";
import ExchangeValueInput from "./exchange-value-input";
import { Wrapper } from "./index.style";

const ExchangeInput = () => {
  const [chooseValue, setChooseValue] = useState();

  return (
    <Wrapper>
      {!chooseValue ? (
        <CurrenciesInput setChooseValue={setChooseValue} />
      ) : (
        <ExchangeValueInput changeInput={setChooseValue} />
      )}
    </Wrapper>
  );
};

export default ExchangeInput;
