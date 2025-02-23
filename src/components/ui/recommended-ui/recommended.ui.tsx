import { TCardItem } from '../../../../src/types/types';
import styles from './recommended-ui.module.scss';

type TRecommendedUIProps = {
  cardsList: TCardItem[];
};

export const RecommendedUI = ({ cardsList }: TRecommendedUIProps) => {
  console.log('RecommendedUI props: ', JSON.stringify(cardsList));
  return (
    <>
      <h3>Рекомендовано Вам:</h3>
      <ul>
        {cardsList.map((cardItem: TCardItem) => (
          <li key={cardItem.id}>{cardItem.productName}</li>
        ))}
      </ul>
    </>
  );
};
