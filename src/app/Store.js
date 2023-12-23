import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countrieSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});
