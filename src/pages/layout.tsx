import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import chatDarkMediumIcon from '@/assets/icons/chat-dark-md.svg';
import { Button, ChatPopup, Footer, Header, TopBar } from '@/components';
import { cn } from '@/utils';

type LayoutProps = {
  children: React.ReactNode;
};

// TODO
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const pathParts = location.pathname.split('/');

  return (
    <React.Fragment>
      <div id="main-wrapper" className="flex flex-col justify-stretch">
        <div>
          <TopBar />
          <Header />
        </div>
        <div className="px-8 md:px-14 lg:px-20 2xl:px-26 py-10 2xl:py-16" id="breadcrumbs">
          <p className="text-xl">
            {pathParts.map((segment, index) => {
              if (i18n.exists(`routes.${segment}`)) {
                const breadcrumb = t(`routes.${segment}`);
                const isFinalRoute = index === pathParts.length - 1;
                return (
                  <React.Fragment key={segment}>
                    <span className={cn('', isFinalRoute ? '' : 'opacity-65')}>{breadcrumb}</span>
                    {!isFinalRoute && <span> / </span>}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </p>
        </div>
        <div className="grow">{children}</div>
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
      </div>
    </React.Fragment>
  );
};

export default Layout;
