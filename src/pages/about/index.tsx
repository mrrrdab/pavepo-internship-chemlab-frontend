import React from 'react';

import Layout from '../layout';
import { AboutSection, AdvantagesSection, LicensesSection, PartnersSection } from './components';

const AboutPage: React.FC = () => {
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
