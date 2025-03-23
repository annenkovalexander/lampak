import { useEffect } from 'react';
import { TCardItem, TProductCardProps } from '../../../src/types/types';

import { ProductCardUI } from '../ui/product-card-ui/product-card-ui';
import { useDispatch } from '../../../src/services/store';
import { changeProductLike } from '../../../src/services/slices/productsInfoSlice';

export const ProductCard: React.FC<TProductCardProps> = ({
  ...props
}: TProductCardProps) => {
  const dispatch = useDispatch();
  const toggleProductLike = () => {
    dispatch(changeProductLike(props.cardItem));
  };
  useEffect(() => {}, []);
  return (
    <>
      <ProductCardUI {...props} toggleProductLike={toggleProductLike} />
    </>
  );
};
