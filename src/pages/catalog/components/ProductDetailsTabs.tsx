import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import arrowDownDarkSmallIcon from '@/assets/icons/arrow-down-dark-sm.svg';
import { GetProductDTO } from '@/api';
import { TabItem, TabList } from '@/components';

type ProductDetailsTabsProps = Pick<
  GetProductDTO['data'],
  'description' | 'advantages' | 'specs' | 'files' | 'accessories' | 'transportationData'
>;

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = ({
  description,
  advantages,
  specs,
  files,
  accessories,
  transportationData,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <TabList>
        <TabItem label={t('product_details_tabs.description')}>
          <div className="text-white text-base 2xl:text-xl bg-primary flex flex-col gap-8 px-16 pt-8 pb-20">
            <ReactMarkdown>{description}</ReactMarkdown>
            {advantages.map(advantage => (
              <div key={advantage.id} className="flex flex-col gap-2.5">
                <p>{advantage.label}:</p>
                <ReactMarkdown className="opacity-70">{advantage.content}</ReactMarkdown>
              </div>
            ))}
          </div>
        </TabItem>
        <TabItem label={t('product_details_tabs.specs')}>
          <div className="text-white text-base 2xl:text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 2xl:w-3/4">
              {specs.map(spec => (
                <div key={spec.id} className="border-b border-b-white flex gap-8 justify-between items-center pb-1">
                  <p>{spec.spec}</p>
                  <p>
                    {spec.value} {spec.measurementUnit && <span>{spec.measurementUnit}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label={t('product_details_tabs.files')}>
          <div className="text-white text-base 2xl:text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 2xl:w-3/4">
              {files.map(file => (
                <div key={file.id} className="flex gap-6 w-full">
                  <img src={file.preview.url} alt={file.title} className="min-w-28 w-28 h-36 object-cover" />
                  <div className="flex flex-col gap-8 justify-between">
                    <p>{file.title}</p>
                    <a href="" className="border-b border-b-white flex items-center gap-2 w-fit">
                      <p className="opacity-65">Скачать</p>
                      <img src={arrowDownDarkSmallIcon} alt="Arrow Down" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label={t('product_details_tabs.accessories')}>
          <div className="text-white text-base 2xl:text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 2xl:w-3/4">
              {accessories.map(accessory => (
                <div
                  key={accessory.id}
                  className="border-b border-b-white flex gap-8 justify-between items-center pb-1"
                >
                  <p>{accessory.name}</p>
                  <p>{accessory.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem label={t('product_details_tabs.transportation')}>
          <div className="text-white text-base 2xl:text-xl bg-primary px-16 pt-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 2xl:w-3/4">
              {transportationData.map(data => (
                <div key={data.id} className="border-b border-b-white flex gap-8 justify-between items-center pb-1">
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
