import { useEffect } from 'react';
import { Section } from '../../../src/components/section/section';
import { Recommended } from '../../../src/components/recommended/recommended';

import styles from './main-page.module.scss';
import { FavouritesMain } from '../../../src/components/favourites-main/favourites-main';
import { AppFooter } from '../../../src/components/app-footer/app-footer';

const MAIN_SECTION_WIDTH: number = 70;
const MAX_PRIMARY_SECTION_WIDTH: number = 700;

export const MainPage = () => {
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <Section
        type='primary'
        widthPercentage={MAIN_SECTION_WIDTH}
        primaryMaxWidth={MAX_PRIMARY_SECTION_WIDTH}
      >
        <Recommended />
      </Section>
      <Section
        type='secondary'
        widthPercentage={MAIN_SECTION_WIDTH}
        primaryMaxWidth={MAX_PRIMARY_SECTION_WIDTH}
      >
        <FavouritesMain />
      </Section>
    </div>
  );
};
