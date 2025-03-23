export type TCardItem = {
  id: string;
  productName: string;
  mainPicture: string;
  productPrice: number;
  addToFavouritesFlag: boolean;
};

export type TCardFullItem = TCardItem & {
  description: string;
  picturesList: string[];
};

export type TCompanyContactData = {
  companyEmail: string;
  companyPhone: string;
  companyTelegramURL: string;
  companyTelegramURLText: string;
  companyLogoUrl: string;
};

export type THeaderData = {
  theme: boolean;
  search: boolean;
  favourites: boolean;
};

export type TProductCardProps = {
  cardItem: TCardItem;
};

export type TProductCardUIProps = {
  cardItem: TCardItem;
  toggleProductLike: () => void;
};

export type TFavouritesMainUIProps = {
  favouritesCardsList: TCardItem[];
};
