/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import abclonalLogo from '@/assets/images/supplier-abclonal.png';
import edomLogo from '@/assets/images/supplier-edom.png';
import ekanLogo from '@/assets/images/supplier-ekan.png';
import hellmaLogo from '@/assets/images/supplier-hellma.png';
import ikaLogo from '@/assets/images/supplier-ika.png';
import merckLogo from '@/assets/images/supplier-merck.png';
import { ROUTES } from '@/constants';
import { Card, CardContent, CardFooter } from '@/components';

import { SupplierItem } from './SupplierItem';

const SuppliersSection: React.FC = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26 overflow-hidden">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">Поставщики</h2>
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="hidden 2xl:flex flex-1 self-stretch bg-primary rounded-xl flex-col px-5 py-6">
          <CardContent>
            <p className="text-white text-base 2xl:text-xl">
              Мы активно сотрудничаем со многими другими российскими и зарубежными партнерами
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link
              to={ROUTES.SUPPLIERS}
              className="group text-xl bg-white border border-black rounded-xl flex justify-between items-center hover:bg-neutral-200 w-full h-15 px-5 py-2.5"
            >
              <p>Подробнее</p>
              <div className="bg-white border border-black text-neutral-900 rounded-3xl group-hover:bg-neutral-300 p-2.5">
                <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
              </div>
            </Link>
          </CardFooter>
        </Card>
        <div className="flex-1 flex flex-col gap-8">
          <SupplierItem image={ekanLogo} title="EKAN" />
          <SupplierItem image={abclonalLogo} title="ABclonal" />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <SupplierItem image={merckLogo} title="merck" />
          <SupplierItem image={ikaLogo} title="IKA" />
        </div>
        <div className="hidden 2xl:flex flex-1 flex-col gap-8">
          <SupplierItem image={hellmaLogo} title="Hellma" />
          <SupplierItem image={edomLogo} title="edom" />
        </div>
      </div>
      <Link
        to={ROUTES.SUPPLIERS}
        className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
      >
        <p className="hidden xs:block font-medium">Смотреть еще</p>
        <img src={arrowRightWhiteIcon} alt="Arrow Right" />
      </Link>
    </section>
  );
};

export { SuppliersSection };
