/* eslint-disable max-len */
import React from 'react';

import Layout from './layout';
import {
  CatalogSection,
  FeedbackSection,
  AboutSection,
  ServicesSection,
  SpecialOffersSection,
  SuppliersSection,
  BusinessSummarySection,
} from './components';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <main className="flex flex-col gap-20 md:gap-32 xl:gap-42 2xl:gap-50 mt-28 xl:mt-40 2xl:mt-50">
          <SpecialOffersSection />
          <CatalogSection />
          <BusinessSummarySection />
          <AboutSection />
          <ServicesSection />
          <SuppliersSection />
          <FeedbackSection />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { HomePage };
