import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./reducer";

export const store = createStore(appReducer, applyMiddleware(thunk, logger));
