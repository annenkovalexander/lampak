import { TCardItem, TFavouritesMainUIProps } from '../../../../src/types/types';
import styles from './favourites-main-ui.module.scss';
import { ProductCardUI } from '../product-card-ui/product-card-ui';
import { useDispatch } from '../../../../src/services/store';
import { changeProductLike } from '../../../../src/services/slices/productsInfoSlice';

export const FavouritesMainUI = ({
  favouritesCardsList
}: TFavouritesMainUIProps) => {
  const dispatch = useDispatch();
  console.log(
    'FavouritesMainUI favouritesCardsList: ',
    JSON.stringify(favouritesCardsList)
  );
  const toggleProductLike = (cardItem: TCardItem) => () =>
    dispatch(changeProductLike(cardItem));
  return (
    <>
      {Array.isArray(favouritesCardsList) && favouritesCardsList.length > 0 && (
        <div className={styles.container}>
          <h3 className={styles.title}>Вам понравилось:</h3>
          <ul className={styles.cardsList}>
            {favouritesCardsList.map((cardItem: TCardItem) => (
              <li key={cardItem.id} className={styles.cardItem}>
                <ProductCardUI
                  cardItem={cardItem}
                  toggleProductLike={toggleProductLike(cardItem)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {Array.isArray(favouritesCardsList) &&
        favouritesCardsList.length === 0 && (
          <h4>В избранном пока ничего нет</h4>
        )}
    </>
  );
};
