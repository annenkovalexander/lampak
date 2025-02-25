import { createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  theme: false,
  searchField: true
};

const appSettingsSlice = createSlice({
  name: 'appSettingsSlice',
  initialState,
  reducers: {
    toggleTheme: (state: any) => {
      state.theme = !state.theme;
    },
    toggleSearchField: (state: any) => {
      state.searchField = !state.searchField;
    }
  },
  selectors: {
    getTheme: (state: any) => state.theme,
    getSearchField: (state: any) => state.searchField
  }
});

export default appSettingsSlice;

export const { toggleTheme, toggleSearchField } = appSettingsSlice.actions;

export const { getTheme, getSearchField } = appSettingsSlice.selectors;
