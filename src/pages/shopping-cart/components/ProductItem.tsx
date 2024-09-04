/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import deleteDarkIcon from '@/assets/icons/delete-dark.svg';
import { ROUTES } from '@/constants';
import { ProductCartRecord } from '@/types';
import { useCart } from '@/hooks';
import { Button, Card, CardContent, CardTitle, Checkbox } from '@/components';

const ProductItem: React.FC<ProductCartRecord> = ({
  id,
  productType,
  model,
  manufacturer,
  images,
  price,
  discount,
  quantity,
  selected,
}) => {
  const [count, setCount] = useState(quantity);
  const { updateProduct, deleteProduct } = useCart();
  const { t } = useTranslation();

  const handleAddProduct = () => {
    const newCount = count + 1;

    const product = {
      id,
      quantity: newCount,
    };

    updateProduct(product);
    setCount(newCount);
  };

  const handleRemoveProduct = () => {
    const newCount = Math.max(1, count - 1);

    const product = { id, quantity: newCount };

    if (newCount >= 1) {
      updateProduct(product);
      setCount(newCount);
    }
  };

  const handleRemoveAll = () => {
    const product = { id };
    deleteProduct(product);
    setCount(0);
  };

  const handleSelect = () => {
    updateProduct({ id, selected: !selected });
  };

  return (
    <React.Fragment>
      <Card className="2xl:hidden border-y border-neutral-900/25 py-4">
        <CardTitle className="mb-5">
          <Link to={`${ROUTES.LAB_EQUIPMENT}/${id}`} className="block">
            <p className="text-xl hover:text-primary">
              {productType} {manufacturer} {model}
            </p>
          </Link>
        </CardTitle>
        <CardContent className="flex justify-between gap-8">
          <div className="border-[0.5px] border-neutral-900/25 rounded-xl min-w-32 w-32 min-h-32 h-32 p-5">
            <img
              src={images.sort((a, b) => a.priority! - b.priority!)[0].url}
              alt={`${productType} ${model} ${manufacturer}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grow flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="text-2xl">{price} ₽</p>
              <Button
                variant="text"
                borderRadius="none"
                className="flex lg:border-b border-black items-center gap-2.5 w-fit p-0 pb-1"
                onClick={handleRemoveAll}
              >
                <img src={deleteDarkIcon} alt="Delete" />
                <p className="hidden lg:block">{t('shopping_cart_page.delete_button')}</p>
              </Button>
            </div>
            <div className="flex justify-between items-stretch">
              <div className="2xl:hidden flex border border-black rounded-xl justify-center items-center gap-4 w-28 px-2">
                <Button variant="text" className="text-2xl p-0" onClick={handleRemoveProduct}>
                  -
                </Button>
                <p className="text-xl">{count}</p>
                <Button variant="text" className="text-2xl p-0" onClick={handleAddProduct}>
                  +
                </Button>
              </div>
              <Checkbox name={id.toString()} size="lg" checked={selected} onChange={handleSelect} />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="hidden 2xl:block border-y border-neutral-900/25 py-6">
        <CardContent className="flex gap-8 justify-between">
          <div className="flex items-center gap-6">
            <Checkbox name={id.toString()} size="lg" checked={selected} onChange={handleSelect} />
            <div className="flex gap-6 3xl:gap-10">
              <img
                src={images.sort((a, b) => a.priority! - b.priority!)[0].url}
                alt={`${productType} ${model} ${manufacturer}`}
                className="min-w-32 w-32 min-h-32 h-32 object-cover"
              />
              <div className="2xl:w-80 3xl:w-98">
                <div className="flex flex-col gap-5 2xl:justify-between h-full">
                  <Link to={`${ROUTES.LAB_EQUIPMENT}/${id}`} className="block">
                    <p className="text-xl hover:text-primary">
                      {productType} {manufacturer} {model}
                    </p>
                  </Link>
                  <Button
                    variant="text"
                    borderRadius="none"
                    className="hidden 2xl:flex border-b border-black items-center gap-2.5 w-fit p-0 pb-1"
                    onClick={handleRemoveAll}
                  >
                    <img src={deleteDarkIcon} alt="Delete" />
                    <p>{t('shopping_cart_page.delete_button')}</p>
                  </Button>
                </div>
              </div>
              <div className="grow">
                <div className="hidden 2xl:flex border border-black rounded-xl justify-center items-center gap-4 w-28 h-12 px-2">
                  <Button variant="text" className="text-2xl p-0" onClick={handleRemoveProduct}>
                    -
                  </Button>
                  <p className="text-xl">{count}</p>
                  <Button variant="text" className="text-2xl p-0" onClick={handleAddProduct}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-1">
            <p className="text-2xl">{price} ₽</p>
            {discount !== 0 && <p className="ml-auto opacity-65 text-xl">-{discount} ₽</p>}
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export { ProductItem };
