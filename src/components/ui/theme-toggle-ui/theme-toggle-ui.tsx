import { SyntheticEvent } from 'react';
import styles from './theme-toggle-ui.module.scss';
import clsx from 'clsx';
import MoonPictogram from '../../../content/images/buttons/Moon.svg';
import SunPictogram from '../../../content/images/buttons/Sun.svg';

type TThemeToggleUIProps = {
  theme: boolean;
  clickHandler: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
};

export const ThemeToggleUI = (props: TThemeToggleUIProps) => (
  <div>
    {props.theme ? (
      <>
        <MoonPictogram
          onClick={props.clickHandler}
          className={styles.darkPictogram}
        />
      </>
    ) : (
      <>
        <SunPictogram
          onClick={props.clickHandler}
          className={styles.lightPictogram}
        />
      </>
    )}
  </div>
);
