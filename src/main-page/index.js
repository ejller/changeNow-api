import React from "react";

import ExhangeInput from "./components/exhange-input";
import ExchangeIcon from "./exchange-icon.svg";
import {
  Title,
  SubTitle,
  FormWrapper,
  Image,
  Page,
  Button,
  Input,
  Label,
} from "./index.style";

const MainPage = () => {
  return (
    <Page>
      <Title>Crypto Exchange</Title>
      <SubTitle>Exchange fast and easy</SubTitle>
      <FormWrapper>
        <div>
          <ExhangeInput />
          <Image src={ExchangeIcon} />
          <ExhangeInput />
        </div>
        <div>
          <Label>Your Ethereum address</Label>
          <Input />
          <Button>EXCHANGE</Button>
        </div>
      </FormWrapper>
    </Page>
  );
};

export default MainPage;
