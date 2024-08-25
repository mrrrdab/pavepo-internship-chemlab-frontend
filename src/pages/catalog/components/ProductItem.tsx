import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { CatalogProductRecord, ProductCartRecord } from '@/types';
import { useCart } from '@/hooks';
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components';

// TODO-L: Count reset on adding another product to cart
const ProductItem: React.FC<CatalogProductRecord> = ({
  id,
  productType,
  model,
  manufacturer,
  originCountries,
  weight,
  images,
  price,
  discount,
}) => {
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { cartItems, putProduct, updateProduct, deleteProduct } = useCart();

  useEffect(() => {
    const product = cartItems.find(item => item.id === id);

    if (product) {
      setCount(product.quantity);
      setIsInCart(true);
    } else {
      setCount(1);
      setIsInCart(false);
    }
  }, [cartItems]);

  const handleAddProduct = () => {
    const newCount = count + 1;

    setCount(newCount);
    setIsEditing(true);
  };

  const handleRemoveProduct = () => {
    const newCount = count - 1;

    setCount(Math.max(1, newCount));
    setIsEditing(true);
  };

  const handleAddToCart = () => {
    const product: ProductCartRecord = {
      id,
      productType,
      model,
      manufacturer,
      images,
      price,
      discount,
      quantity: count,
      selected: true,
    };

    putProduct(product);
    setIsEditing(false);
  };

  const handleRemoveFromCart = () => {
    const product = { id };
    deleteProduct(product);
    setCount(1);
    setIsInCart(false);
  };

  const handleSave = () => {
    const product = { id, quantity: count };
    updateProduct(product);
    setIsEditing(false);
  };

  return (
    <div className="bg-secondary border-[0.5px] border-black/20 rounded-xl flex flex-col">
      <img
        src={images.sort((a, b) => a.priority - b.priority)[0].url}
        alt={`${productType} ${model} ${manufacturer}`}
        className="rounded-xl w-full h-72 object-cover"
      />
      <Card className="flex flex-col gap-5 px-5 py-6">
        <CardHeader className="flex flex-col gap-2.5">
          <Link to={`${ROUTES.LAB_EQUIPMENT}/${id}`} className="block">
            <CardTitle className="text-2xl hover:text-primary">{productType}</CardTitle>
          </Link>
          <p className="opacity-65 text-base">
            {manufacturer} {model}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2.5">
          <p className="text-base">
            <span className="mr-2">Производитель:</span>
            {originCountries.map((country, index, originCountries) => (
              <span key={country} className="opacity-65">
                {country}
                {index !== originCountries.length - 1 && '/'}
              </span>
            ))}
          </p>
          <p className="text-base">
            Вес:
            <span className="opacity-65 ml-2">
              {weight.value} {weight.measurementUnit}
            </span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-base">Цена:</p>
            <p className="text-2xl font-medium">{price} ₽</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-stretch">
          <div className="border border-black rounded-xl flex justify-center items-center gap-4 w-24 h-12 px-2">
            <Button variant="text" className="text-2xl p-0" onClick={handleRemoveProduct}>
              -
            </Button>
            <p className="text-xl">{count}</p>
            <Button variant="text" className="text-2xl p-0" onClick={handleAddProduct}>
              +
            </Button>
          </div>
          <div className="w-fit">
            {isInCart ? (
              <div className="flex gap-4">
                <Button variant="text" className="p-0 px-2" onClick={handleRemoveFromCart}>
                  Удалить
                </Button>
                <Button variant="outline" disabled={!isEditing} className="bg-white" onClick={handleSave}>
                  Сохранить
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                borderRadius="lg"
                onClick={handleAddToCart}
                className="bg-transparent font-medium w-full h-12"
              >
                Добавить в корзину
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export { ProductItem };
