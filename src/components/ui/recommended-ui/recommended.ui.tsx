import { TCardItem } from '../../../../src/types/types';
import { ProductCardUI } from '../product-card-ui/product-card-ui';
import styles from './recommended-ui.module.scss';

type TRecommendedUIProps = {
  cardsList: TCardItem[];
};

export const RecommendedUI = ({ cardsList }: TRecommendedUIProps) => {
  console.log('RecommendedUI props: ', JSON.stringify(cardsList));
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Рекомендовано Вам:</h3>
      <ul className={styles.cardsList}>
        {cardsList.map((cardItem: TCardItem) => (
          <li key={cardItem.id} className={styles.cardItem}>
            <ProductCardUI cardItem={cardItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
