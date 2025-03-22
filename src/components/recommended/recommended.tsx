import { useEffect, useState } from 'react';
import { TCardItem } from '../../../src/types/types';
import { RecommendedUI } from '../ui/recommended-ui/recommended.ui';
import { useSelector } from '../../../src/services/store';
import { getSearchFieldValue } from '../../../src/services/slices/searchSlice';

export const cardsList: TCardItem[] = [
  {
    id: '1',
    productName: '1Клеенаносящая машина',
    mainPicture: 'images/1/1.png',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '2',
    productName: '2Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '3',
    productName: '3Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '4',
    productName: '4Клеенаносящая машина',
    mainPicture: 'images/1/1.png',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '5',
    productName: '5Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '6',
    productName: '6Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '7',
    productName: '7Клеенаносящая машина',
    mainPicture: 'images/1/1.png',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '8',
    productName: '8Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '9',
    productName: '9Ручная клеенаносящая машина',
    mainPicture: 'images/2/1.jpeg',
    productPrice: 5000,
    addToFavouritesFlag: true
  }
];

export const Recommended = () => {
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
  }, [searchFieldValue]);

  return (
    <>
      <RecommendedUI cardsList={cardsListFiltered} />
    </>
  );
};
