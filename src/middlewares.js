import _ from "lodash";

import api from "./api";
import types from "./const/action-types";

const getListAvailableCurrencies = (search, alreadyChoosedCurrency) => (dispatch) => {
  api.getListAvailableCurrencies().then((res) => {
    const data = search
      ? _.filter(res.data, (el) => el.ticker.includes(search.toLowerCase()))
      : res.data;
    alreadyChoosedCurrency && _.remove(data, ["ticker", alreadyChoosedCurrency]);
    dispatch({ type: types.listOfCurrencies.success, payload: data });
  });
};
const getEstimatedExchangeAmount = (from, to, amount, isMin) => (dispatch) => {
  dispatch({ type: types.changeCurrency.loading });
  api.getEstimatedExchangeAmount(from, to, amount).then((res) => {
    dispatch({
      type: types.estimatedAmount.success,
      payload: { amount: isMin && amount, estimatedAmount: res.data.estimatedAmount },
    });
  });
};

const getMinimalExchangeAmount = (from, to) => (dispatch) => {
  api
    .getMinimalExchangeAmount(from, to)
    .then((res) => {
      dispatch(getEstimatedExchangeAmount(from, to, res.data.minAmount, true));
    })
    .catch((err) => {
      dispatch({
        type: types.estimatedAmount.error,
        payload: err,
      });
    });
};

const swapValues = (from, to) => (dispatch) => {
  dispatch({ type: types.changeCurrency.swap });
  dispatch(getMinimalExchangeAmount(to, from));
};
export default {
  getListAvailableCurrencies,
  getEstimatedExchangeAmount,
  getMinimalExchangeAmount,
  swapValues,
};
