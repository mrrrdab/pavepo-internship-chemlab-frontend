/* eslint-disable max-len */
import React from 'react';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Button, Footer, Header, TopBar } from '@/components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <TopBar isHomePage />
      <div className="bg-[url('/src/assets/images/header-background.png')] bg-cover bg-center rounded-xl mx-2">
        <Header isHomePage />
        <div className="flex py-40">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col gap-18 px-26">
            <div className="flex flex-col gap-10">
              <h1 className="text-white text-5xl font-semibold">
                Товары химических реактивов и лабораторного оборудования
              </h1>
              <div className="flex items-center gap-18">
                <div className="flex flex-col gap-1">
                  <p className="text-white text-5xl">01</p>
                  <p className="text-white text-xl">Широкий ассортимент</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-5xl">02</p>
                  <p className="text-white text-xl">Контроль качества</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-5xl">03</p>
                  <p className="text-white text-xl">Уникальные бренды</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <Button
                borderRadius="lg"
                className="group bg-white text-neutral-900 flex justify-between items-center hover:bg-neutral-200 w-3/5 h-16"
              >
                <p>Получить консультацию онлайн</p>
                <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                </div>
              </Button>
              <Button
                borderRadius="lg"
                className="group bg-white text-neutral-900 flex justify-between items-center hover:bg-neutral-200 w-2/5 h-16"
              >
                <p>Перейти в каталог</p>
                <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div className="mt-50">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
