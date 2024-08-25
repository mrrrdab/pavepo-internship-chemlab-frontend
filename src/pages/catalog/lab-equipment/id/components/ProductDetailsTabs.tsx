import React from 'react';

import arrowDownDarkSmallIcon from '@/assets/icons/arrow-down-dark-sm.svg';
import { Product } from '@/types';
import { TabItem, TabList } from '@/components';

type ProductDetailsTabsProps = Pick<
  Product,
  'description' | 'advantages' | 'specs' | 'files' | 'accessories' | 'transportation'
>;

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = ({
  description,
  advantages,
  specs,
  files,
  accessories,
  transportation,
}) => {
  return (
    <div>
      <TabList>
        <TabItem label="Описание">
          <div className="text-white text-xl bg-primary flex flex-col gap-8 px-16 pt-8 pb-20">
            <p>{description}</p>
            {advantages.map(advantage => (
              <div key={advantage.id} className="flex flex-col gap-2.5">
                <p>{advantage.title}:</p>
                <p className="opacity-70">{advantage.content}</p>
              </div>
            ))}
          </div>
        </TabItem>
        <TabItem label="Характеристики">
          <div className="text-white text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 w-3/4">
              {specs.map(spec => (
                <div key={spec.id} className="border-b border-b-white flex justify-between items-center pb-1">
                  <p>{spec.spec}</p>
                  <p>
                    {spec.value} {spec.measurementUnit && <span>{spec.measurementUnit}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label="Документы">
          <div className="text-white text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 w-3/4">
              {files.map(file => (
                <div key={file.id} className="flex gap-6 w-full">
                  <img src={file.previewUrl} alt={file.label} className="min-w-28 w-28 h-36 object-cover" />
                  <div className="flex flex-col justify-between">
                    <p>{file.label}</p>
                    <a href="" className="border-b border-b-white flex gap-2 w-fit">
                      <p className="opacity-65">Скачать</p>
                      <img src={arrowDownDarkSmallIcon} alt="Arrow Down" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label="Комплект">
          <div className="text-white text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 w-3/4">
              {accessories.map(accessory => (
                <div key={accessory.id} className="border-b border-b-white flex justify-between items-center pb-1">
                  <p>{accessory.name}</p>
                  <p>{accessory.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label="Данные о транспортировке">
          <div className="text-white text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 w-3/4">
              {transportation.map(data => (
                <div key={data.id} className="border-b border-b-white flex justify-between items-center pb-1">
                  <p>{data.name}</p>
                  <p>
                    {data.value} {data.measurementUnit && <span>{data.measurementUnit}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
      </TabList>
    </div>
  );
};

export { ProductDetailsTabs };
