import React from 'react';

import contactsBackground from '@assets/images/contacts-background.png';

import Layout from '../layout';
import { ContactsSection, DepartmentsSection } from './components';

const ContactsPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <img src={contactsBackground} alt="Background" className="mb-16" />
        <main className="flex flex-col gap-30 px-26">
          <ContactsSection />
          <DepartmentsSection />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { ContactsPage };
