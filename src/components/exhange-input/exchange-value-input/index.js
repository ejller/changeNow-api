import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { Wrapper, Input, Currency } from "./index.style";

//Redux
import { useActions } from "../../../hooks/useAction";
import actions from "../../../actions";
import middlewares from "../../../middlewares";

const ExchangeValueInput = ({ position }) => {
  const [currrencyInputValue, setCurrrencyInputValue] = useState("");

  const dispatch = useDispatch();
  const [fetchEstimatedAmount] = useActions([middlewares.getEstimatedExchangeAmount]);

  const leftCurrencyName = useSelector((state) => _.find(state.data, ["position", "left"])?.name);
  const minAmount = useSelector((state) => _.find(state.data, ["position", "left"])?.minAmount);
  const currencyName = useSelector((state) => _.find(state.data, ["position", position])?.name);
  const currencyValue = useSelector((state) => _.find(state.data, ["position", position])?.value);

  useEffect(
    () => (currencyValue ? setCurrrencyInputValue(currencyValue) : setCurrrencyInputValue("")),
    [currencyValue]
  );

  const handleChange = (e) => {
    if (!isNaN(e.target.value) && !e.target.value.match(/[a-zA-Z]/)) {
      setCurrrencyInputValue(e.target.value);
      if (minAmount <= e.target.value) {
        fetchEstimatedAmount(currencyName, leftCurrencyName, e.target.value);
      } else {
        dispatch(actions.minValueError());
      }
    }
  };

  const hadleRemoveCurrency = () => {
    dispatch(actions.removeCurrency(position));
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={currrencyInputValue}
        onChange={handleChange}
        disabled={position === "right" || !currrencyInputValue}
      />
      <Currency onClick={hadleRemoveCurrency}>
        <img src="https://changenow.io/images/coins/eth.svg" alt="Clear" />
        <span>{currencyName.toUpperCase()}</span>
      </Currency>
    </Wrapper>
  );
};

export default ExchangeValueInput;
