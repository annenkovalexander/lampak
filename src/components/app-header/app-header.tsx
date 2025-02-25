import { useEffect, useState } from 'react';
import { AppHeaderUI } from '../ui/app-header-ui/app-header-ui';
import { useDispatch, useSelector } from '../../../src/services/store';
import {
  getSearchField,
  getTheme,
  toggleSearchField
} from '../../../src/services/slices/appSettingsSlice';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const search = useSelector(getSearchField);
  useEffect(() => {}, []);
  const searchButtonHandler = () => {
    dispatch(toggleSearchField());
  };
  const goToFavourites = () => {
    navigate('/favourites');
  };
  const goToMainPage = () => {
    navigate('/');
  };
  return (
    <AppHeaderUI
      headerData={{ theme: theme, search: search, favourites: false }}
      searchButtonHandler={searchButtonHandler}
      goToFavourites={goToFavourites}
      goToMainPage={goToMainPage}
    />
  );
};
