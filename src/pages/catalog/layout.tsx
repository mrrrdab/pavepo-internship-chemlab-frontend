import React from 'react';

import catalogBackground from '@/assets/images/catalog-background.png';

import BaseLayout from '../layout';
import { CategorySection } from './components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <BaseLayout>
        <img src={catalogBackground} alt="Catalog Background" className="w-full h-80 object-cover px-26 mb-16" />
        <div className="px-26 mb-50">
          <CategorySection />
        </div>
        <main className="px-26">{children}</main>
      </BaseLayout>
    </React.Fragment>
  );
};

export { Layout };
