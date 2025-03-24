import { useEffect, useState } from 'react';
import { TCardItem } from '../../../src/types/types';
import { RecommendedUI } from '../ui/recommended-ui/recommended.ui';
import { useSelector } from '../../../src/services/store';
import { getSearchFieldValue } from '../../../src/services/slices/searchSlice';
import {
  getFavouritesProductsList,
  getProductsList
} from '../../../src/services/slices/productsInfoSlice';

export const Recommended = () => {
  const cardsList = useSelector(getProductsList);
  const favouritesProducts = useSelector(getFavouritesProductsList);
  const [cardsListFiltered, setCardsListFiltered] = useState(cardsList);
  const { searchFieldValue } = useSelector(getSearchFieldValue);
  useEffect(() => {
    console.log(
      'Recommended searchFieldValue: ' + JSON.stringify(searchFieldValue)
    );
    if (searchFieldValue)
      setCardsListFiltered(
        cardsList.filter((cardItem) =>
          cardItem.productName
            .toLowerCase()
            .trim()
            .includes(searchFieldValue.toLowerCase().trim())
        )
      );
    else setCardsListFiltered(cardsList);
  }, [searchFieldValue, favouritesProducts]);

  return (
    <>
      <RecommendedUI cardsList={cardsListFiltered} />
    </>
  );
};
