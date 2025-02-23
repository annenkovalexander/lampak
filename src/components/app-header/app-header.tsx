import { useEffect, useState } from 'react';
import { THeaderData } from '../../../src/types/types';
import { AppHeaderUI } from '../ui/app-header-ui/app-header-ui';

const headerData: THeaderData = {
  theme: false,
  search: false,
  favourites: false
};

export const AppHeader = () => {
  const [searchFlag, setSearchFlag] = useState(headerData.search);
  useEffect(() => {}, []);
  const searchButtonHandler = () => {
    setSearchFlag((previousValue) => !previousValue);
    console.log('searchButtonHandler searchFlag: ' + searchFlag);
  };
  const goToFavourites = () => {};
  const goToMainPage = () => {};
  return (
    <AppHeaderUI
      headerData={headerData}
      searchButtonHandler={searchButtonHandler}
      goToFavourites={goToFavourites}
      goToMainPage={goToMainPage}
    />
  );
};
