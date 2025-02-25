import { useNavigate } from 'react-router-dom';
import { getTheme } from '../../../src/services/slices/appSettingsSlice';
import { useSelector } from '../../../src/services/store';
import { TCompanyContactData } from '../../../src/types/types';
import { AppFooterUI } from '../ui/app-footer-ui/app-footer-ui';

const companyData: TCompanyContactData = {
  companyEmail: process.env.NODE_COMPANY_EMAIL!,
  companyPhone: process.env.NODE_COMPANY_PHONE!,
  companyTelegramURL: process.env.NODE_COMPANY_TELEGRAM_URL!,
  companyTelegramURLText: process.env.NODE_COMPANY_TELEGRAM_URL_TEXT!,
  companyLogoUrl: '../../../src/content/1.png'
};

export const AppFooter = () => {
  const navigate = useNavigate();
  const theme = useSelector(getTheme);
  const logoHandler = () => {
    navigate('/');
  };
  return (
    <>
      <AppFooterUI
        companyContactData={companyData}
        theme={theme}
        logoHandler={logoHandler}
      />
    </>
  );
};
