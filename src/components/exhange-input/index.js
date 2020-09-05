import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

import { Wrapper } from "./index.style";

import CurrenciesInput from "./currencies-input";
import ExchangeValueInput from "./exchange-value-input";

const ExchangeInput = ({ position }) => {
  const isChooseCurrencyName = useSelector(
    (state) => _.find(state.data, ["position", position])?.name
  );
  return (
    <Wrapper>
      {!isChooseCurrencyName ? (
        <CurrenciesInput position={position} />
      ) : (
        <ExchangeValueInput position={position} />
      )}
    </Wrapper>
  );
};

export default ExchangeInput;
