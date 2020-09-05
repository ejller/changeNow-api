import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import _ from "lodash";

import { Input, ClearIcon, Dropdown, Wrapper, Option } from "./index.style";
import clearIcon from "../../../resources/clear-icon.svg";

//Redux
import { useActions } from "../../../hooks/useAction";
import actions from "../../../actions";
import middlewares from "../../../middlewares";

const CurrenciesInput = ({ position }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowClear, setIsShowClear] = useState(false);

  const dispatch = useDispatch();
  const [fetchCurrencyList] = useActions([middlewares.getListAvailableCurrencies]);
  const [fetchMinAmount] = useActions([middlewares.getMinimalExchangeAmount]);
  const currencyList = useSelector((state) => state.list);
  const alreadyChoosedCurrency = useSelector((state) => state.data[0]);
  const exchangeData = useSelector((state) => state.data);

  useEffect(() => fetchCurrencyList(searchInputValue, alreadyChoosedCurrency?.name), [
    alreadyChoosedCurrency,
    fetchCurrencyList,
    searchInputValue,
  ]);

  const debounceSearch = useCallback(_.debounce(fetchCurrencyList, 150));

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
    const searchLine = e.target.value;
    debounceSearch(searchLine, alreadyChoosedCurrency?.name);
    setIsShowDropdown(true);
    setIsShowClear(searchLine ? true : false);
  };

  const handleFocus = () => {
    fetchCurrencyList(searchInputValue, alreadyChoosedCurrency?.name);
    setIsShowDropdown(true);
  };

  const handleClear = () => {
    setSearchInputValue("");
    setIsShowDropdown(false);
    setIsShowClear(false);
  };

  const handleOutsideClick = () => setIsShowDropdown(false);

  const handleChoose = (name) => {
    dispatch(
      actions.chooseCurrency({
        name,
        position,
      })
    );

    if (alreadyChoosedCurrency)
      if (position === "right") {
        fetchMinAmount(_.find(exchangeData, ["position", "left"]).name, name);
      } else {
        fetchMinAmount(name, _.find(exchangeData, ["position", "right"]).name);
      }
  };

  return (
    <Wrapper>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <Input
          value={searchInputValue}
          onFocus={handleFocus}
          onChange={handleChange}
          type="text"
          placeholder="Search"
        />
        {isShowClear && <ClearIcon src={clearIcon} onClick={handleClear} />}
        {isShowDropdown && (
          <Dropdown>
            {_.map(currencyList, (el) => (
              <Option key={el.ticker} onClick={() => handleChoose(el.ticker)}>
                <img src={`https://changenow.io/images/coins/${el.ticker}.svg`} alt="icon" />
                <span>{el.ticker.toUpperCase()}</span>
                <span>{el.name}</span>
              </Option>
            ))}
          </Dropdown>
        )}
      </OutsideClickHandler>
    </Wrapper>
  );
};
export default CurrenciesInput;
