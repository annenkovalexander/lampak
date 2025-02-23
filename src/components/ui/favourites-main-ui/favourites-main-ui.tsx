import { TCardItem } from 'src/types/types';

type TFavouritesMainUIProps = {
  favouritesCardsList: TCardItem[];
};

export const FavouritesMainUI = ({
  favouritesCardsList
}: TFavouritesMainUIProps) => {
  console.log(
    'FavouritesMainUI favouritesCardsList: ',
    JSON.stringify(favouritesCardsList)
  );
  return (
    <>
      {Array.isArray(favouritesCardsList) && favouritesCardsList.length > 0 && (
        <>
          <h3>Вам понравилось:</h3>
          <ul>
            {favouritesCardsList.map((cardItem: TCardItem) => (
              <li key={cardItem.id}>{cardItem.productName}</li>
            ))}
          </ul>
        </>
      )}
      {Array.isArray(favouritesCardsList) &&
        favouritesCardsList.length === 0 && (
          <h4>В избранном пока ничего нет</h4>
        )}
    </>
  );
};
