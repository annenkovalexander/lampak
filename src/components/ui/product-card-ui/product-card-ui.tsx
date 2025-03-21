import { TCardItem } from '../../../types/types';
import FavouritesSVG from '../../../content/images/buttons/Favourites.svg';
import styles from './product-card-ui.module.scss';

type TProductCardUIProps = {
  cardItem: TCardItem;
};

export const ProductCardUI = (props: TProductCardUIProps) => (
  <div className={styles.productListItem}>
    <img
      src={props.cardItem.mainPicture}
      alt={'Фото' + props.cardItem.productName}
    />
    <div className={styles.productNameContainer}>
      <p className={styles.productShortName}>{props.cardItem.productName}</p>
      <div className={styles.priceContainer}>
        <h4 className={styles.productPrice}>
          {props.cardItem.productPrice + ' ₽'}
        </h4>
        <FavouritesSVG className={styles.icon} />
      </div>
    </div>
  </div>
);
