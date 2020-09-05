import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

import ExhangeInput from "../components/exhange-input";
import ExchangeIcon from "../resources/exchange-icon.svg";
import LoadingIcon from "../resources/loading-icon.svg";

//Redux
import { useActions } from "../hooks/useAction";
import middlewares from "../middlewares";

import {
  Title,
  SubTitle,
  FormWrapper,
  Image,
  Page,
  Button,
  Input,
  Label,
  ErrorMessage,
} from "./index.style";

const MainPage = () => {
  const [swapValues] = useActions([middlewares.swapValues]);
  const exchangeData = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.loading);
  const errorMessage = useSelector((state) => state.errorMessage);
  return (
    <Page>
      <div>
        <Title>Crypto Exchange</Title>
        <SubTitle>Exchange fast and easy</SubTitle>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Sumbit");
          }}
        >
          <FormWrapper>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <div>
              <ExhangeInput position="left" />
              {isLoading ? (
                <Image src={LoadingIcon} id="loading" />
              ) : (
                <Image
                  src={ExchangeIcon}
                  onClick={() => {
                    if (exchangeData.length === 2)
                      swapValues(
                        _.find(exchangeData, ["position", "left"]).name,
                        _.find(exchangeData, ["position", "right"]).name
                      );
                  }}
                />
              )}
              <ExhangeInput position="right" />
            </div>
            <div>
              <Label>Your Ethereum address</Label>
              <Input name="address" />
              <Button type="submit">EXCHANGE</Button>
            </div>
          </FormWrapper>
        </form>
      </div>
    </Page>
  );
};

export default MainPage;
