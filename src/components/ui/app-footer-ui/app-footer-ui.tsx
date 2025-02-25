import { TCompanyContactData } from '../../../../src/types/types';
import styles from './app-footer-ui.module.scss';
import CompanyLogo from '../../../content/images/favicon.png';
import clsx from 'clsx';

type TAppFooterUIProps = {
  companyContactData: TCompanyContactData;
  theme: boolean;
  logoHandler: () => void;
};

export const AppFooterUI = ({
  theme,
  logoHandler,
  companyContactData
}: TAppFooterUIProps) => (
  <div
    className={clsx([
      styles.container,
      theme ? styles.darkTheme : styles.lightTheme
    ])}
  >
    <ul className={styles.companyContacts}>
      <li key={companyContactData.companyEmail}>
        <a href={'mailto:' + companyContactData.companyEmail}>
          {companyContactData.companyEmail}
        </a>
      </li>
      <li key={companyContactData.companyPhone}>
        <a href={'tel:' + companyContactData.companyPhone}>
          {companyContactData.companyPhone}
        </a>
      </li>
      <li key={companyContactData.companyTelegramURL}>
        <a href={companyContactData.companyTelegramURL}>
          {companyContactData.companyTelegramURLText}
        </a>
      </li>
    </ul>
    <img
      className={styles.companyLogo}
      src={CompanyLogo}
      alt='Логотип компании'
      onClick={logoHandler}
    />
  </div>
);
