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
// TODO: Header + background content centering
// TODO: All hovers + all focuses
// TODO: Catalog pop-up
// TODO: All forms
const HomePage = () => {
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
