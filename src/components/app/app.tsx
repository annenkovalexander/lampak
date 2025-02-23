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

const theme = false;

const App = () => (
  <div
    className={
      theme
        ? clsx([styles.container, styles.darkTheme])
        : clsx([styles.container, styles.lightTheme])
    }
  >
    <AppHeader />
    <Outlet />
    <AppFooter />
  </div>
);

export default App;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='/description/:id' element={<DescriptionPage />} />
      <Route path='/favourites' element={<FavouritesPage />} />
      <Route path='*' element={<NotFound404 />} />
    </Route>
  )
);

export { router };
