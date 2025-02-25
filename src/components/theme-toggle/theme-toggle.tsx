import { SyntheticEvent, useState } from 'react';
import { ThemeToggleUI } from '../ui/theme-toggle-ui/theme-toggle-ui';
import { useDispatch, useSelector } from '../../../src/services/store';
import {
  getTheme,
  toggleTheme
} from '../../../src/services/slices/appSettingsSlice';

type TThemeToggleProps = {
  theme: boolean;
};

export const ThemeToggle = (props: TThemeToggleProps) => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const handleThemeChange = (e: SyntheticEvent<HTMLOrSVGElement>) => {
    dispatch(toggleTheme());
    document.documentElement.style.setProperty(
      '--svgColor',
      theme ? '#ffffff' : '#000000'
    );
  };

  return (
    <>
      <ThemeToggleUI theme={theme} clickHandler={handleThemeChange} />
    </>
  );
};
