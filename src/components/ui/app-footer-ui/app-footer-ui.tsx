import { TCompanyContactData } from '../../../../src/types/types';
import styles from './app-footer-ui.module.scss';
import CompanyLogo from '../../../content/images/favicon.png';

type TAppFooterUIProps = {
  companyContactData: TCompanyContactData;
};

export const AppFooterUI = ({ companyContactData }: TAppFooterUIProps) => (
  <div className={styles.container}>
    <ul>
      <li key={companyContactData.companyEmail}>
        {companyContactData.companyEmail}
      </li>
      <li key={companyContactData.companyPhone}>
        {companyContactData.companyPhone}
      </li>
      <li key={companyContactData.companyTelegram}>
        {companyContactData.companyTelegram}
      </li>
    </ul>
    <img
      className={styles.companyLogo}
      src={CompanyLogo}
      alt='Логотип компании'
    />
  </div>
);
