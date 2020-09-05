import _ from "lodash";
import types from "./const/action-types";

const initState = {
  data: [],
  list: [],
  loading: false,
  errorMessage: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.changeCurrency.choose:
      return {
        ...state,
        data: [...state.data, { position: action.payload.position, name: action.payload.name }],
        loading: false,
      };

    case types.changeCurrency.remove: {
      const data = state.data;
      _.remove(data, (el) => el.position === action.payload);
      if (data[0]) data[0].value = undefined;
      return { ...state, data, loading: false, errorMessage: "" };
    }

    case types.changeCurrency.swap: {
      const data = state.data;
      const tmp = data[0].name;
      data[0].name = data[1].name;
      data[1].name = tmp;
      return { ...state, data, loading: false };
    }

    case types.changeCurrency.error: {
      const data = state.data;
      _.find(data, ["position", "right"]).value = "-";
      return { ...state, data, loading: false, errorMessage: "Incorrect currency value" };
    }

    case types.changeCurrency.loading: {
      return { ...state, loading: true, errorMessage: "" };
    }
    case types.listOfCurrencies.success:
      return { ...state, list: action.payload };

    case types.estimatedAmount.success: {
      const data = state.data;
      _.find(data, ["position", "right"]).value = action.payload.estimatedAmount;
      if (action.payload.amount) {
        _.find(data, ["position", "left"]).value = action.payload.amount;
        _.find(data, ["position", "left"]).minAmount = action.payload.amount;
      }
      return { ...state, data, loading: false };
    }

    case types.estimatedAmount.error: {
      const data = state.data;
      _.find(data, ["position", "right"]).value = "";
      return { ...state, data, loading: false, errorMessage: "This pair is disabled now" };
    }

    default:
      return state;
  }
};
