import { useEffect, useState } from 'react';
import { FavouritesMainUI } from '../ui/favourites-main-ui/favourites-main-ui';
import { TCardItem } from '../../../src/types/types';
import { useDispatch, useSelector } from '../../../src/services/store';
import {
  changeProductLike,
  getFavouritesProductsList,
  getProductsList
} from '../../../src/services/slices/productsInfoSlice';

const getFirstFavouritesState: (cardsList: TCardItem[]) => TCardItem[] = (
  cardsList
) => cardsList.filter((cardItem: TCardItem) => cardItem.addToFavouritesFlag);

export const FavouritesMain = () => {
  const cardsList = useSelector(getFavouritesProductsList);
  useEffect(() => {}, []);
  return (
    <>
      <FavouritesMainUI favouritesCardsList={cardsList} />
    </>
  );
};
