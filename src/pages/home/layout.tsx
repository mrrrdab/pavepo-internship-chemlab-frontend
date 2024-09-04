/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import chatDarkMediumIcon from '@/assets/icons/chat-dark-md.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Button, ChatPopup, Footer, Header, Loader, TopBar } from '@/components';
import { getHeroBlock } from '@/api';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const {
    data: heroBlock,
    isLoading,
    isError,
  } = useQuery(['hero-block', i18n.language], () => getHeroBlock(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <React.Fragment>
      <TopBar isHomePage />
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError || !heroBlock ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : (
        <div className="bg-cover bg-center rounded-xl mx-2" style={{ backgroundImage: `url(${heroBlock.image.url})` }}>
          <Header isHomePage />
          <div className="flex py-40">
            <div className="hidden xl:flex-1 xl:block"></div>
            <div className="flex-1 lg:grow-2 3xl:flex-1 flex flex-col gap-18 px-8 md:px-14 lg:px-20 2xl:px-26">
              <div className="flex flex-col gap-10">
                <h1 className="text-white text-5xl font-semibold">{heroBlock.title}</h1>
                <div className="hidden md:flex md:items-center md:gap-18">
                  {heroBlock.subtitles.map(subtitle => (
                    <div key={subtitle.id} className="flex flex-col gap-1">
                      <p className="text-white text-5xl">{subtitle.title}</p>
                      <p className="text-white text-xl">{subtitle.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <Link
                  to={heroBlock.buttons[0].url}
                  className="px-5 py-2.5 text-xl bg-white rounded-xl hidden xs:flex group text-neutral-900 justify-between items-center hover:bg-neutral-200 w-full lg:w-3/5 h-16"
                >
                  <p>{heroBlock.buttons[0].label}</p>
                  <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                    <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                  </div>
                </Link>
                <Link
                  to={heroBlock.buttons[1].url}
                  className="px-5 py-2.5 text-xl bg-white rounded-xl hidden xs:flex group text-neutral-900 justify-between items-center hover:bg-neutral-200 w-full lg:w-2/5 h-16"
                >
                  <p>{heroBlock.buttons[1].label}</p>
                  <div className="border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                    <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
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
