import { useEffect, useState } from 'react';
import { FavouritesMainUI } from '../ui/favourites-main-ui/favourites-main-ui';
import { TCardItem } from 'src/types/types';
import { cardsList } from '../recommended/recommended';

const getFirstFavouritesState: () => TCardItem[] = () =>
  cardsList.filter((cardItem: TCardItem) => cardItem.addToFavouritesFlag);

export const FavouritesMain = () => {
  const [favouritesCardsList, setFavouritesCardsList] = useState(
    getFirstFavouritesState()
  );
  useEffect(() => {}, []);
  return (
    <>
      <FavouritesMainUI favouritesCardsList={favouritesCardsList} />
    </>
  );
};
