import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: {
  searchFieldValue: string;
} = {
  searchFieldValue: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchFieldValue: (
      state: any,
      action: PayloadAction<typeof initialState>
    ) => {
      state.searchFieldValue = action.payload;
      console.log(
        'searchSlice setSearchFieldValue: ' +
          JSON.stringify(state.searchFieldValue)
      );
    }
  },
  selectors: {
    getSearchFieldValue: (state: any) => {
      console.log(
        'getSearchFieldValue state.searchFieldValue: ' +
          JSON.stringify(state.searchFieldValue)
      );
      return state.searchFieldValue;
    }
  }
});

export default searchSlice;

export const { setSearchFieldValue } = searchSlice.actions;
export const { getSearchFieldValue } = searchSlice.selectors;
