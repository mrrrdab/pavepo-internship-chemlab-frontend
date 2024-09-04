/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrowUpDarkMediumIcon from '@/assets/icons/arrow-up-dark-md.svg';
import arrowDownDarkMediumIcon from '@/assets/icons/arrow-down-dark-md.svg';
import { ROUTES } from '@/constants';
import { ProductCartRecord, ProductDetailedRecord } from '@/types';
import { useCart } from '@/hooks';
import { Button } from '@/components';

type ProductInfoProps = ProductDetailedRecord;

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  category,
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
  const { t } = useTranslation();

  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [mainImage, setMainImage] = useState(() => {
    return images.sort((a, b) => a.priority! - b.priority!)[0];
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
      category,
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

  const handleImageClick = (image: any) => {
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
    <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 3xl:gap-36 xl:h-104">
      <div className="grow flex gap-5">
        {images.length > 1 && (
          <div className="hidden w-20 min-w-20 3xl:min-w-28 3xl:w-28 xl:flex flex-col">
            <Button
              variant="text"
              className="flex justify-center items-center h-[calc((100%-3*1.25rem)/4)] p-0"
              onClick={() => handleScroll(-1)}
            >
              <img src={arrowUpDarkMediumIcon} alt="Arrow Up" />
            </Button>
            <div ref={imageContainerRef} className="flex-1 flex flex-col gap-5 overflow-y-auto">
              {images
                .filter(image => image !== mainImage)
                .sort((a, b) => a.priority! - b.priority!)
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
        )}
        <div className="grow hidden border-[0.5px] border-neutral-900/25 rounded-xl w-96 2xl:w-100 xl:block 3xl:w-104">
          <img
            src={mainImage.url}
            alt={`${productType} ${model} ${manufacturer}`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="xl:hidden rounded-xl w-full">
          <div className="flex flex-nowrap gap-5 h-80 overflow-auto">
            {images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={`${productType} ${model} ${manufacturer}`}
                className="border-[0.5px] border-neutral-900/25 min-w-80 w-80 h-auto object-contain rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grow flex flex-col gap-10 justify-between">
        <div>
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl">{productType}</h1>
            <p className="text-base 2xl:text-xl opacity-65 border-b-[0.5px] border-b-black pb-2">
              {manufacturer} {model}
            </p>
          </div>
          <div className="flex flex-col gap-5 mb-10">
            <h3 className="text-primary text-xl 2xl:text-2xl">{price} ₽</h3>
            {/* TODO: */}
            <div className="h-30 overflow-auto">
              <p className="opacity-80 text-xl">{description!.split(/[.!?]\s/)[0]}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="opacity-80 text-base 2xl:text-xl">
              <span className="mr-2">{t('product_info.manufacturer')}:</span>
              {originCountries.map((country, index, originCountries) => (
                <span key={country} className="opacity-65">
                  {country}
                  {index !== originCountries.length - 1 && '/'}
                </span>
              ))}
            </p>
            <p className="opacity-80 text-base 2xl:text-xl">
              {t('product_info.weight')}:
              <span className="opacity-65 ml-2">
                {weight} {t('common_measurement_units.kg')}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5 sm:justify-between sm:items-stretch">
          <div className="border border-black rounded-xl flex justify-center items-center gap-4 min-w-24 max-w-24 h-12 px-2">
            <Button variant="text" className="text-xl 2xl:text-2xl p-0" onClick={handleRemoveProduct}>
              -
            </Button>
            <p className="text-base 2xl:text-xl">{count}</p>
            <Button variant="text" className="text-xl 2xl:text-2xl p-0" onClick={handleAddProduct}>
              +
            </Button>
          </div>
          <div className="w-fit flex flex-col 2xl:flex-row gap-2.5 sm:gap-5">
            <div className="w-60">
              {isInCart ? (
                <div className="w-max sm:ml-auto">
                  <div className="flex flex-row sm:flex-col gap-4">
                    <Button variant="outline" disabled={!isEditing} className="bg-white" onClick={handleSave}>
                      {t('cart_actions.save')}
                    </Button>
                    <Button variant="text" className="p-0 px-2" onClick={handleRemoveFromCart}>
                      {t('cart_actions.remove_from_cart')}
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  borderRadius="lg"
                  onClick={handleAddToCart}
                  className="bg-transparent font-medium w-full h-12"
                >
                  {t('cart_actions.add_to_cart')}
                </Button>
              )}
            </div>
            <div className="w-60">
              <Button size="sm" borderRadius="lg" className="font-medium w-full h-12" onClick={handleBuy}>
                {t('cart_actions.buy_now')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductInfo };
