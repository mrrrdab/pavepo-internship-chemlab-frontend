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

// TODO: Chat
// TODO: Imgs Alts
const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <main className="flex flex-col gap-50 mt-50">
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
