import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowUpDarkMediumIcon from '@/assets/icons/arrow-up-dark-md.svg';
import arrowDownDarkMediumIcon from '@/assets/icons/arrow-down-dark-md.svg';
import { ROUTES } from '@/constants';
import { Product, ProductCartRecord } from '@/types';
import { useCart } from '@/hooks';
import { Button } from '@/components';

type ProductInfoProps = Pick<
  Product,
  | 'id'
  | 'productType'
  | 'model'
  | 'manufacturer'
  | 'originCountries'
  | 'weight'
  | 'images'
  | 'price'
  | 'discount'
  | 'description'
>;

type Image = Product['images'][0];

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  productType,
  model,
  manufacturer,
  originCountries,
  weight,
  images,
  price,
  discount,
  description,
}) => {
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [mainImage, setMainImage] = useState(() => {
    return images.sort((a, b) => a.priority - b.priority)[0];
  });

  const { cartItems, putProduct, updateProduct, deleteProduct } = useCart();
  const navigate = useNavigate();

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const product = cartItems.find(item => item.id === id);

    if (product) {
      setCount(product.quantity);
      setIsInCart(true);
    } else {
      setCount(1);
      setIsInCart(false);
    }
  }, [cartItems, id]);

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

  const handleBuy = () => {
    handleAddToCart();
    navigate(ROUTES.SHOPPING_CART);
  };

  const handleImageClick = (image: Image) => {
    if (image !== mainImage) {
      setMainImage(image);
    }
  };

  const handleScroll = (offset: number) => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      const containerHeight = container.clientHeight;
      const scrollHeight = container.scrollHeight;

      const newScrollPosition = container.scrollTop + offset * containerHeight;

      if (newScrollPosition < 0) {
        container.scrollTop = 0;
      } else if (newScrollPosition > scrollHeight - containerHeight) {
        container.scrollTop = scrollHeight - containerHeight;
      } else {
        container.scrollTop = newScrollPosition;
      }
    }
  };

  return (
    <div className="flex gap-36 h-104">
      <div className="grow flex gap-5">
        <div className="min-w-28 w-28 flex flex-col">
          <Button
            variant="text"
            className="flex justify-center items-center h-[calc((100%-3*1.25rem)/5)] p-0"
            onClick={() => handleScroll(-1)}
          >
            <img src={arrowUpDarkMediumIcon} alt="Arrow Down" />
          </Button>
          <div ref={imageContainerRef} className="flex-1 flex flex-col gap-5 overflow-y-auto">
            {images
              .filter(image => image !== mainImage)
              .sort((a, b) => a.priority - b.priority)
              .map((image, index) => (
                <div key={image.id} className="border-[0.5px] border-neutral-900/25 h-[calc((100%-3*1.25rem)/3)]">
                  <img
                    src={image.url}
                    alt={`${productType} ${model} ${manufacturer} ${index}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
          </div>
          <Button
            variant="text"
            className="flex justify-center items-center h-[calc((100%-3*1.25rem)/5)] p-0"
            onClick={() => handleScroll(1)}
          >
            <img src={arrowDownDarkMediumIcon} alt="Arrow Down" />
          </Button>
        </div>
        <div className="border-[0.5px] border-neutral-900/25 rounded-xl w-104">
          <img
            src={mainImage.url}
            alt={`${productType} ${model} ${manufacturer}`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-5xl">{productType}</h1>
            <p className="text-xl opacity-65 border-b-[0.5px] border-b-black pb-2">
              {manufacturer} {model}
            </p>
          </div>
          <div className="flex flex-col gap-5 mb-10">
            <h3 className="text-primary text-2xl">{price} ₽</h3>
            <p className="opacity-80 text-xl">{description.split('.')[0]}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="opacity-80 text-xl">
              <span className="mr-2">Производитель:</span>
              {originCountries.map((country, index, originCountries) => (
                <span key={country} className="opacity-65">
                  {country}
                  {index !== originCountries.length - 1 && '/'}
                </span>
              ))}
            </p>
            <p className="opacity-80 text-xl">
              Вес:
              <span className="ml-2">
                {weight.value} {weight.measurementUnit}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-stretch">
          <div className="border border-black rounded-xl flex justify-center items-center gap-4 min-w-24 h-12 px-2">
            <Button variant="text" className="text-2xl p-0" onClick={handleRemoveProduct}>
              -
            </Button>
            <p className="text-xl">{count}</p>
            <Button variant="text" className="text-2xl p-0" onClick={handleAddProduct}>
              +
            </Button>
          </div>
          <div className="w-fit flex gap-5">
            <div className="w-60">
              {isInCart ? (
                <div className="flex gap-4">
                  <Button variant="text" className="p-0 px-2 ml-auto" onClick={handleRemoveFromCart}>
                    Удалить
                  </Button>
                  <Button variant="outline" disabled={!isEditing} className="bg-white " onClick={handleSave}>
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
            <div className="w-60">
              <Button size="sm" borderRadius="lg" className="font-medium w-full h-12" onClick={handleBuy}>
                Купить в 1 клик
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductInfo };
