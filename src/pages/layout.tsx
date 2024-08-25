import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTE_SEGMENTS_LABELS } from '@/constants';
import { Footer, Header, TopBar } from '@/components';

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
        <div className="mt-50">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
