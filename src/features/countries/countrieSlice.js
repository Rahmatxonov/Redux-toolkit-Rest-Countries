import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  SearchByCode,
  searchByRegion,
} from "./countrieAction";

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  error: false,
  success: false,
  message: "",
  region: "",
  searchTerm: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.countrySearched = [];
      state.region = "";
    },

    setRegion: (state, action) => {
      state.region = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      .addCase(SearchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(SearchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearched = action.payload;
        state.success = true;
      })
      .addCase(SearchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearched = [];
      })

      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.error = false;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.countriesData = [];
        state.message = action.payload;
      });
  },
});
export const { reset, setRegion, setSearchTerm } = countriesSlice.actions;
export default countriesSlice.reducer;
