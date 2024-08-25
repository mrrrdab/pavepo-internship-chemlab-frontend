/* eslint-disable max-len */
import React from 'react';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import abclonalLogo from '@/assets/images/supplier-abclonal.png';
import edomLogo from '@/assets/images/supplier-edom.png';
import ekanLogo from '@/assets/images/supplier-ekan.png';
import hellmaLogo from '@/assets/images/supplier-hellma.png';
import ikaLogo from '@/assets/images/supplier-ika.png';
import merckLogo from '@/assets/images/supplier-merck.png';
import { Card, CardContent, CardFooter, Button } from '@/components';

import { SupplierItem } from './SupplierItem';

const SuppliersSection: React.FC = () => {
  return (
    <section className="px-26">
      <h2 className="text-5xl mb-16">Поставщики</h2>
      <div className="flex gap-5">
        <Card className="flex-1 self-stretch bg-primary rounded-xl flex flex-col px-5 py-6">
          <CardContent>
            <p className="text-white text-xl">
              Мы активно сотрудничаем со многими другими российскими и зарубежными партнерами
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button variant="outline" borderRadius="lg" className="group flex justify-between items-center w-full h-15">
              <p>Подробнее</p>
              <div className="bg-white border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
              </div>
            </Button>
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
        <div className="flex-1 flex flex-col gap-8">
          <SupplierItem image={hellmaLogo} title="Hellma" />
          <SupplierItem image={edomLogo} title="edom" />
        </div>
      </div>
    </section>
  );
};

export { SuppliersSection };
