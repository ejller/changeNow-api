import React, { useState } from "react";
import _ from "lodash";
import OutsideClickHandler from "react-outside-click-handler";

import clearIcon from "./clear-icon.svg";
import { Input, ClearIcon, Dropdown, Wrapper, Option } from "./index.style";

const data = [
  {
    ticker: "btc",
    name: "Bitcoin",
    image: "https://changenow.io/images/coins/btc.svg",
    hasExternalId: false,
    isFiat: false,
    featured: true,
    isStable: false,
    supportsFixedRate: true,
  },
  {
    ticker: "eth",
    name: "Ethereum",
    image: "https://changenow.io/images/coins/eth.svg",
    hasExternalId: false,
    isFiat: false,
    featured: true,
    isStable: false,
    supportsFixedRate: true,
  },
  {
    ticker: "xrp",
    name: "Ripple",
    image: "https://changenow.io/images/coins/xrp.svg",
    hasExternalId: true,
    isFiat: false,
    featured: false,
    isStable: false,
    supportsFixedRate: true,
  },
];

const CurrenciesInput = (props) => {
  const [value, setValue] = useState("");
  const [toggleOptions, settoggleOptions] = useState(false);
  const [toggleClear, setToggleClear] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value) {
      setToggleClear(true);
      settoggleOptions(true);
    } else {
      setToggleClear(false);
      settoggleOptions(false);
    }
  };

  const handleClear = () => {
    setValue("");
    settoggleOptions(false);
    setToggleClear(false);
  };

  const handleChoose = (ticker) => {
    props.setChooseValue(ticker);
  };
  return (
    <Wrapper>
      <OutsideClickHandler
        onOutsideClick={() => {
          settoggleOptions(false);
        }}
      >
        <Input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Search"
        />

        {toggleClear && <ClearIcon src={clearIcon} onClick={handleClear} />}
        {toggleOptions && (
          <Dropdown>
            {_.map(data, (el) => (
              <Option key={el.ticker} onClick={() => handleChoose(el.ticker)}>
                <img src={el.image} />
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
