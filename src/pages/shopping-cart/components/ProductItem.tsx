import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import deleteDarkIcon from '@/assets/icons/delete-dark.svg';
import { ROUTES } from '@/constants';
import { ProductCartRecord } from '@/types';
import { useCart } from '@/hooks';
import { Button, Card, CardContent, Checkbox } from '@/components';

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
    <Card className="border-y border-y-neutral-900/25 py-6">
      <CardContent className="flex justify-between">
        <div className="flex items-center gap-6">
          <Checkbox name={id} size="lg" checked={selected} onChange={handleSelect} />
          <div className="flex gap-10">
            <img
              src={images.sort((a, b) => a.priority - b.priority)[0].url}
              alt={`${productType} ${model} ${manufacturer}`}
              className="w-28 h-28 object-cover"
            />
            <div className="w-98">
              <div className="flex flex-col justify-between h-full">
                <Link to={`${ROUTES.LAB_EQUIPMENT}/${id}`} className="block">
                  <p className="text-xl hover:text-primary">
                    {productType} {manufacturer} {model}
                  </p>
                </Link>
                <Button
                  variant="text"
                  borderRadius="none"
                  className="border-b border-black flex items-center gap-2.5 w-fit p-0 pb-1"
                  onClick={handleRemoveAll}
                >
                  <img src={deleteDarkIcon} alt="Delete" />
                  <p>Удалить</p>
                </Button>
              </div>
            </div>
            <div className="grow">
              <div className="border border-black rounded-xl flex justify-center items-center gap-4 w-28 h-12 px-2">
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
  );
};

export { ProductItem };
