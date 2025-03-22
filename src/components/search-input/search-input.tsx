import { SyntheticEvent } from 'react';
import {
  getSearchField,
  getTheme
} from '../../../src/services/slices/appSettingsSlice';
import { useDispatch, useSelector } from '../../../src/services/store';
import { SearchInputUI } from '../ui/search-input-ui/search-input-ui';
import { setSearchFieldValue } from '../../../src/services/slices/searchSlice';

export const SearchInput: React.FC<Partial<HTMLInputElement>> = ({
  className
}) => {
  const dispatch = useDispatch();
  const searchFlag = useSelector(getSearchField);
  const theme = useSelector(getTheme);
  console.log('SearchInput theme: ' + theme);
  const searchHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setSearchFieldValue({ searchFieldValue: e.currentTarget.value }));
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
