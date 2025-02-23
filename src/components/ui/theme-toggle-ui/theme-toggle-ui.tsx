import { SyntheticEvent } from 'react';
import styles from './theme-toggle-ui.module.scss';
import clsx from 'clsx';

type TThemeToggleUIProps = {
  theme: boolean;
  clickHandler: (e: SyntheticEvent<HTMLInputElement>) => void;
};

export const ThemeToggleUI = (props: TThemeToggleUIProps) => (
  <div className={styles.container}>
    <div className={styles.radioGroup}>
      <input
        type='radio'
        className={styles.radioButton}
        id='dark'
        name='dark'
        value='dark'
        required
        checked={props.theme ? true : false}
        onChange={props.clickHandler}
      />
      <label
        htmlFor='dark'
        className={
          props.theme
            ? clsx([styles.radioButtonLabel, styles.activeLink])
            : styles.radioButtonLabel
        }
      >
        Темная
      </label>
    </div>
    <div className={styles.radioGroup}>
      <input
        type='radio'
        className={styles.radioButton}
        id='light'
        name='light'
        value='light'
        required
        checked={props.theme ? false : true}
        onChange={props.clickHandler}
      />
      <label
        htmlFor='light'
        className={
          !props.theme
            ? clsx([styles.radioButtonLabel, styles.activeLink])
            : styles.radioButtonLabel
        }
      >
        Светлая
      </label>
    </div>
  </div>
);
