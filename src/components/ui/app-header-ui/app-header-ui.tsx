import { THeaderData } from '../../../../src/types/types';
import styles from './app-header-ui.module.scss';
import companyLogo from '../../../content/images/favicon.png';
import { clsx } from 'clsx';
import { ThemeToggle } from '../../../../src/components/theme-toggle/theme-toggle';
import searchIcon from '../../../content/images/buttons/Search Alt Icon.svg';
import favouritesIcon from '../../../content/images/buttons/Galaxy Vector.svg';

type TAppHeaderUIProps = {
  headerData: THeaderData;
  searchButtonHandler: () => void;
  goToFavourites: () => void;
  goToMainPage: () => void;
};

export const AppHeaderUI = (props: TAppHeaderUIProps) => (
  <div className={styles.container}>
    <h2 onClick={props.goToMainPage}>Lampak</h2>
    <img
      className={styles.companyLogo}
      src={companyLogo}
      alt='Логотип компании'
    />
    <div className={styles.menuButtons}>
      <button
        type='button'
        className={styles.button}
        onClick={props.goToFavourites}
      >
        <img
          className={styles.svgIcon}
          src={favouritesIcon}
          alt='Переход на страницу избранного'
        />
      </button>
      <button
        type='button'
        className={styles.button}
        onClick={props.searchButtonHandler}
      >
        <img
          className={styles.svgIcon}
          src={searchIcon}
          alt='Активаци поисковой'
        />
      </button>
      <ThemeToggle theme={props.headerData.theme} />
    </div>
  </div>
);
