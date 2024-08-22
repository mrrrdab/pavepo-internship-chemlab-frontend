import React, { useState } from 'react';

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components';
import { GetLabEquipmentProductDTO } from '@/api/lab-equipment';

const ProductCard: React.FC<GetLabEquipmentProductDTO> = ({
  imgUrl,
  productType,
  model,
  manufacturer,
  originCountries,
  weight,
  measurementUnit,
  price,
}) => {
  const [count, setCount] = useState(1);

  return (
    <div className="bg-secondary border-[0.5px] border-black/20 rounded-xl flex flex-col">
      <img src={imgUrl} alt={productType} className="rounded-xl h-72 object-cover" />
      <Card className="flex flex-col gap-5 px-5 py-6">
        <CardHeader className="flex flex-col gap-2.5">
          <CardTitle className="text-2xl">{productType}</CardTitle>
          <p className="opacity-65 text-base">
            {manufacturer} {model}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2.5">
          <p className="text-base">
            <span className="mr-2">Производитель:</span>
            {originCountries.map((country, index, originCountries) => (
              <span key={country} className="opacity-65 text-base">
                {country}
                {index !== originCountries.length - 1 && '/'}
              </span>
            ))}
          </p>
          <p className="text-base">
            Вес:
            <span className="opacity-65 text-base ml-2">
              {weight} {measurementUnit}
            </span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-base">Цена:</p>
            <p className="text-2xl font-medium">{price} ₽</p>
          </div>
        </CardContent>
        <CardFooter className="flex items-stretch gap-5">
          <div className="border border-black rounded-xl flex justify-center items-center gap-4 w-24 h-12 px-2">
            <Button variant="text" className="text-2xl p-0" onClick={() => setCount(() => Math.max(count - 1, 1))}>
              -
            </Button>
            <p className="text-xl">{count}</p>
            <Button variant="text" className="text-2xl p-0" onClick={() => setCount(() => count + 1)}>
              +
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            borderRadius="lg"
            className="flex-1 bg-transparent truncate font-medium h-12"
          >
            Добавить в корзину
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { ProductCard };
