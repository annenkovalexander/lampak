import { SyntheticEvent } from 'react';
import {
  getSearchField,
  getTheme
} from '../../../src/services/slices/appSettingsSlice';
import { useSelector } from '../../../src/services/store';
import { SearchInputUI } from '../ui/search-input-ui/search-input-ui';

export const SearchInput: React.FC<Partial<HTMLInputElement>> = ({
  className
}) => {
  const searchFlag = useSelector(getSearchField);
  const theme = useSelector(getTheme);
  console.log('SearchInput theme: ' + theme);
  const searchHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(
      'SearchInput searchHandler: ' + JSON.stringify(e.currentTarget.value)
    );
  };
  return (
    <>
      <SearchInputUI
        className={className}
        searchFlag={searchFlag}
        searchHandler={searchHandler}
        theme={theme}
      />
    </>
  );
};
