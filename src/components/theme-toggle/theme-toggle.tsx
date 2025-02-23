import { SyntheticEvent, useState } from 'react';
import { ThemeToggleUI } from '../ui/theme-toggle-ui/theme-toggle-ui';

type TThemeToggleProps = {
  theme: boolean;
};

export const ThemeToggle = (props: TThemeToggleProps) => {
  const [theme, setTheme] = useState(props.theme);
  const handleThemeChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(
      'ThemeToggle handleThemeChange event: ',
      JSON.stringify(e.currentTarget.value)
    );
    if (e.currentTarget.value === 'dark') {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  return (
    <>
      <ThemeToggleUI theme={theme} clickHandler={handleThemeChange} />
    </>
  );
};
