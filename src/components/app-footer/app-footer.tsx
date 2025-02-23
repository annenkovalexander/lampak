import { TCompanyContactData } from '../../../src/types/types';
import { AppFooterUI } from '../ui/app-footer-ui/app-footer-ui';

const companyData: TCompanyContactData = {
  companyEmail: 'lampak@gmail.com',
  companyPhone: '+74951112233',
  companyTelegram: 'lampak_tg',
  companyLogoUrl: '../../../src/content/1.png'
};

export const AppFooter = () => <AppFooterUI companyContactData={companyData} />;
