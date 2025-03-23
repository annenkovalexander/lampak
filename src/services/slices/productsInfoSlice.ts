import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCardItem } from '../../../src/types/types';
import productsList from '../mockData/productsList.json';
import { act } from 'react';

export const initialState: {
  productsList: TCardItem[];
} = {
  productsList: productsList
};

export const productsInfoSlice = createSlice({
  name: 'productsInfo',
  initialState,
  reducers: {
    changeProductLike: (
      state: typeof initialState,
      action: PayloadAction<TCardItem>
    ) => {
      console.log('changeProductLike action:' + JSON.stringify(action));
      state.productsList.forEach((item: TCardItem) => {
        if (item.id === action.payload.id) {
          item.addToFavouritesFlag = !item.addToFavouritesFlag;
          console.log(
            'changeProductLike state.productsList:' +
              JSON.stringify(state.productsList)
          );
        }
      });
    }
  },
  selectors: {
    getProductsList: (state: typeof initialState) => state.productsList,
    getFavouritesProductsList: (state: typeof initialState) =>
      state.productsList.filter((item) => item.addToFavouritesFlag)
  }
});

export default productsInfoSlice;

export const { changeProductLike } = productsInfoSlice.actions;
export const { getProductsList, getFavouritesProductsList } =
  productsInfoSlice.selectors;
