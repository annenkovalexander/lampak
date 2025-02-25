import clsx from 'clsx';
import styles from './search-input-ui.module.scss';
import { SyntheticEvent } from 'react';
type TSearchInputUIProps = {
  searchFlag: boolean;
  searchHandler: (e: SyntheticEvent<HTMLInputElement>) => void;
  theme: boolean;
};

export const SearchInputUI = (props: TSearchInputUIProps) => (
  <>
    {props.searchFlag && (
      <input
        className={clsx([
          styles.container,
          props.theme ? styles.darkTheme : styles.lightTheme
        ])}
        onChange={props.searchHandler}
        placeholder='Введите Ваш запрос...'
      />
    )}
  </>
);
