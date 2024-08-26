/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { ROUTES } from '@/constants';
import { CatalogProductRecord } from '@/types';
import { ProductItem } from '@/pages/catalog/components';

// === DATA EXAMPLE ===
const baseProduct: CatalogProductRecord = {
  id: '100',
  productType: 'Центрифуга лабораторная',
  model: 'LC-04A',
  manufacturer: 'Армед',
  originCountries: ['Россия', 'Китай'],
  weight: { value: 9.1, measurementUnit: 'кг' },
  images: [
    {
      id: '0',
      url: 'https://s3-alpha-sig.figma.com/img/b407/6fd5/00b6f5252ca11a053f237bacd901e911?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsiQnup8m-5qZGW1eN1-Cc04P-VHlsERv5hL-GRNR4hLyy7y~wcIkGgz3odNUvugrbbsPLr3Cmq3esojSi4m7hdQULKSWQzgzoWItgO28SF7gyCm8iY7IV~xvI27FuYQhSk~qM4TK7JVq0GqzgXgcPH04nM-cBpzWf4gT9ilNe3IBgROao545QB~NVVDdHUNNr72y4ZEuEpr52OItpPDKYYHr72A-5yckEE6T6NTwEaOaxRg30Chsa0Le78NFTyspCzsjTAt8mcVAnZ-Fl46qsW5uHbq0Xsn0Tfv3utINdN7nvE07u1I5nP5xgsCFYB124hu3XUBBR-D6LJV0za6NA__',
      priority: 0,
    },
  ],
  price: 27621,
  discount: 1000,
};

const SIMILAR_PRODUCTS = Array.from({ length: 4 }, (_, index) => ({
  ...baseProduct,
  id: (parseInt(baseProduct.id) + index).toString(),
}));

const SimilarProductsSection: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center mb-10 2xl:mb-16">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl">Похожие товары</h2>
        <Link
          to={ROUTES.HOME}
          className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="flex flex-nowrap gap-5 overflow-x-auto">
        {SIMILAR_PRODUCTS.map(product => (
          <div key={product.id} className="flex-1 min-w-96">
            <ProductItem
              id={product.id}
              productType={product.productType}
              model={product.model}
              manufacturer={product.manufacturer}
              originCountries={product.originCountries}
              weight={product.weight}
              images={product.images}
              price={product.price}
              discount={product.discount}
            />
          </div>
        ))}
      </div>
      {SIMILAR_PRODUCTS && (
        <Link
          to={ROUTES.HOME}
          className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
        >
          <p className="hidden xs:block font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      )}
    </section>
  );
};

export { SimilarProductsSection };
