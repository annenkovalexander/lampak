import { useEffect } from 'react';
import { TCardItem } from '../../../src/types/types';
import { RecommendedUI } from '../ui/recommended-ui/recommended.ui';

export const cardsList: TCardItem[] = [
  {
    id: '1345',
    productName: 'Клеенаносящая машина',
    mainPicture: '../../../src/content/images/1.png',
    productPrice: 5000,
    addToFavouritesFlag: true
  },
  {
    id: '54321',
    productName: 'Ручная клеенаносящая машина',
    mainPicture: '../../../src/content/images/1.png',
    productPrice: 5000,
    addToFavouritesFlag: true
  }
];

export const Recommended = () => {
  useEffect(() => {}, []);
  return (
    <>
      <RecommendedUI cardsList={cardsList} />
    </>
  );
};
