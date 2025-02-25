import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Routes,
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { AppHeader } from '../app-header/app-header';
import { AppFooter } from '../app-footer/app-footer';
import { MainPage } from '../../../src/pages/main-page/main-page';
import { DescriptionPage } from '../../../src/pages/description-page/description-page';
import { NotFound404 } from '../../../src/pages/not-found-page/not-found-page';
import { FavouritesPage } from '../../../src/pages/favourites-page/favourites-page';

import styles from './app.module.scss';
import clsx from 'clsx';
import { useSelector } from '../../services/store';
import { getTheme } from '../../../src/services/slices/appSettingsSlice';
import { SearchInput } from '../search-input/search-input';

const App = () => {
  const theme = useSelector(getTheme);
  return (
    <div
      className={
        theme
          ? clsx([styles.container, styles.darkTheme])
          : clsx([styles.container, styles.lightTheme])
      }
    >
      <div className={styles.outletContainer}>
        <AppHeader />
        <SearchInput />
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default App;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='/description/:id' element={<DescriptionPage />} />
      <Route path='/favourites' element={<FavouritesPage />} />
      <Route path='*' element={<NotFound404 />} />
    </Route>
  ),
  {
    basename: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'
  }
);

export { router };
