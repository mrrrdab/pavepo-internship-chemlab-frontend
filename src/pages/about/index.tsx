import React from 'react';

import { AboutSection, AdvantagesSection, LicensesSection, PartnersSection } from './components';
import Layout from '../layout';

const AboutPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <main className="flex flex-col gap-50">
          <AboutSection />
          <AdvantagesSection />
          <LicensesSection />
          <PartnersSection />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { AboutPage };
