import React from 'react';

import contactsBackground from '@/assets/images/contacts-background.png';

import Layout from '../layout';
import { PrimaryContactsSection, DepartmentsSection } from './components';

const ContactsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <img src={contactsBackground} alt="Contacts Background" className="mb-10 2xl:mb-16" />
        <main className="flex flex-col gap-20 2xl:gap-30 px-8 md:px-14 lg:px-20 2xl:px-26">
          <PrimaryContactsSection />
          <DepartmentsSection />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { ContactsPage };
