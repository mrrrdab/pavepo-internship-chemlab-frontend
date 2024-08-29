/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import chatDarkMediumIcon from '@/assets/icons/chat-dark-md.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { ROUTES } from '@/constants';
import { Button, ChatPopup, Footer, Header, TopBar } from '@/components';

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
          <div className="hidden xl:flex-1 xl:block"></div>
          <div className="flex-1 lg:grow-2 3xl:flex-1 flex flex-col gap-18 px-8 md:px-14 lg:px-20 2xl:px-26">
            <div className="flex flex-col gap-10">
              <h1 className="text-white text-5xl font-semibold">
                Товары химических реактивов и лабораторного оборудования
              </h1>
              <div className="hidden md:flex md:items-center md:gap-18">
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
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="hidden md:block w-full lg:w-3/5">
                <Button
                  borderRadius="lg"
                  className="group text-xl bg-white text-neutral-900 flex justify-between items-center hover:bg-neutral-200 w-full h-16"
                >
                  <p>Получить консультацию онлайн</p>
                  <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5 lg:ml-5">
                    <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                  </div>
                </Button>
              </div>
              <Link
                to={ROUTES.LAB_EQUIPMENT}
                className="px-5 py-2.5 text-xl bg-white rounded-xl hidden xs:flex group text-neutral-900 justify-between items-center hover:bg-neutral-200 w-full lg:w-2/5 h-16"
              >
                <p>Перейти в каталог</p>
                <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div className="mt-28 xl:mt-40 2xl:mt-50 mb-24 md:mb-28">
        <Footer />
      </div>
      <div className="fixed bottom-6 right-5">
        <ChatPopup
          trigger={
            <Button borderRadius="full" className="p-4 md:p-5">
              <img src={chatDarkSmallIcon} alt="Chat" className="block md:hidden" />
              <img src={chatDarkMediumIcon} alt="Chat" className="hidden md:block" />
            </Button>
          }
        />
      </div>
    </React.Fragment>
  );
};

export default Layout;
