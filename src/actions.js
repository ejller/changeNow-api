import types from "./const/action-types";

export default {
  chooseCurrency: (payload) => {
    return {
      type: types.changeCurrency.choose,
      payload,
    };
  },

  removeCurrency: (payload) => {
    return {
      type: types.changeCurrency.remove,
      payload,
    };
  },
  minValueError: (payload) => {
    return {
      type: types.changeCurrency.error,
      payload,
    };
  },
};
