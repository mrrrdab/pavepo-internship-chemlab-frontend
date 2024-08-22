import React, { useState } from 'react';

import deleteIcon from '@assets/icons/delete.svg';
import { Button, Card, CardContent, Checkbox } from '@/components';

type ProductMetadata = { label: string; value: string };

type ProductCardProps = {
  id: string;
  imgUrl: string;
  productType: string;
  manufacturer: string;
  model: string;
  price: number;
  metadata: ProductMetadata[];
};

const ProductCard: React.FC<ProductCardProps> = ({ id, imgUrl, productType, manufacturer, model, price, metadata }) => {
  const [count, setCount] = useState(1);

  return (
    <Card className="border-y border-y-neutral-900/25 py-6">
      <CardContent className="flex items-center gap-6">
        <Checkbox size="lg" name={id} />
        <div className="flex gap-10">
          <img src={imgUrl} alt={model} className="w-28 h-28 object-cover" />
          <div className="grow-3">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-xl">
                  {productType} {manufacturer} {model}
                </p>
                {metadata.map(data => (
                  <p key={data.label} className="opacity-65 text-xl">
                    <span className="mr-2">{data.label}:</span>
                    <span>{data.value}</span>
                  </p>
                ))}
              </div>
              <Button
                variant="text"
                className="border-b border-black rounded-none flex items-center gap-2.5 w-fit p-0 pb-1"
              >
                <img src={deleteIcon} alt="Delete" />
                <p>Удалить</p>
              </Button>
            </div>
          </div>
          <div className="grow">
            <div className="border border-black rounded-xl flex justify-center items-center gap-4 w-28 h-12 px-2">
              <Button variant="text" className="text-2xl p-0" onClick={() => setCount(() => Math.max(count - 1, 1))}>
                -
              </Button>
              <p className="text-xl">{count}</p>
              <Button variant="text" className="text-2xl p-0" onClick={() => setCount(() => count + 1)}>
                +
              </Button>
            </div>
          </div>
          <div>
            <p className="text-2xl">{price} ₽</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ProductCard };
