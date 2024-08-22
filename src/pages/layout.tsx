import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTE_SEGMENTS_LABELS } from '@/constants';
import { Footer, Header, TopBar } from '@/components';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');

  return (
    <React.Fragment>
      <TopBar />
      <Header />
      <div className="px-26 py-16">
        <p className="text-xl">
          {pathParts.map((segment, index) => {
            const breadcrumb = ROUTE_SEGMENTS_LABELS[segment];
            const isFinalRoute = index === pathParts.length - 1;
            return (
              <span key={segment} className={isFinalRoute ? '' : 'opacity-65'}>
                {breadcrumb}
                {!isFinalRoute && ' / '}
              </span>
            );
          })}
        </p>
      </div>
      <div className="grow">{children}</div>
      <div className="mt-50">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
