import { THeaderData } from '../../../../src/types/types';
import styles from './app-header-ui.module.scss';
import companyLogo from '../../../content/images/favicon.png';
import { clsx } from 'clsx';
import { ThemeToggle } from '../../../../src/components/theme-toggle/theme-toggle';
import SearchPictogram from '../../../content/images/buttons/Search.svg';
import FavouritesPictogram from '../../../content/images/buttons/Galaxy.svg';

type TAppHeaderUIProps = {
  headerData: THeaderData;
  searchButtonHandler: () => void;
  goToFavourites: () => void;
  goToMainPage: () => void;
};

export const AppHeaderUI = (props: TAppHeaderUIProps) => (
  <div
    className={clsx(
      props.headerData.theme
        ? [styles.container, styles.darkTheme]
        : [styles.container, styles.lightTheme]
    )}
  >
    <h2 className={styles.companyName} onClick={props.goToMainPage}>
      Lampak
    </h2>
    <img
      className={styles.companyLogo}
      src={companyLogo}
      alt='Логотип компании'
      onClick={props.goToMainPage}
    />
    <div className={styles.menuButtons}>
      <button
        type='button'
        className={styles.button}
        onClick={props.goToFavourites}
      >
        <FavouritesPictogram
          className={clsx([
            styles.icon,
            props.headerData.theme
              ? styles.darkPictogram
              : styles.lightPictogram
          ])}
        />
      </button>
      <button
        type='button'
        className={styles.button}
        onClick={props.searchButtonHandler}
      >
        <SearchPictogram
          className={clsx([
            styles.icon,
            props.headerData.theme
              ? styles.darkPictogram
              : styles.lightPictogram
          ])}
        />
      </button>
      <ThemeToggle theme={props.headerData.theme} />
    </div>
  </div>
);
