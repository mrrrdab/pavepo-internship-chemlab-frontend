import React from 'react';
import { useLocation } from 'react-router-dom';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import chatDarkMediumIcon from '@/assets/icons/chat-dark-md.svg';
import { ROUTE_SEGMENTS_LABELS } from '@/constants';
import { Button, ChatPopup, Footer, Header, TopBar } from '@/components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');

  return (
    <React.Fragment>
      <div id="main-wrapper" className="flex flex-col justify-stretch">
        <div>
          <TopBar />
          <Header />
        </div>
        <div className="px-26 py-16">
          <p className="text-xl">
            {pathParts.map((segment, index) => {
              const breadcrumb = ROUTE_SEGMENTS_LABELS[segment];
              const isFinalRoute = index === pathParts.length - 1;
              return (
                <React.Fragment key={segment}>
                  <span className={isFinalRoute ? '' : 'opacity-65'}>{breadcrumb}</span>
                  {!isFinalRoute && <span> / </span>}
                </React.Fragment>
              );
            })}
          </p>
        </div>
        <div className="grow">{children}</div>
        <div className="mt-50 mb-24 md:mb-28">
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
