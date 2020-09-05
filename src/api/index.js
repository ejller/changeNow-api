import axios from "axios";

const API_KEY = "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";
const BASE_API = "https://changenow.io/api/v1";

export default {
  getListAvailableCurrencies: () => axios.get(BASE_API + "/currencies?active=true&fixedRate=true"),
  getMinimalExchangeAmount: (from, to) => axios.get(BASE_API + `/min-amount/${from}_${to}`),
  getEstimatedExchangeAmount: (from, to, amount) =>
    axios.get(BASE_API + `/exchange-amount/${amount}/${from}_${to}?api_key=${API_KEY}`),
};
