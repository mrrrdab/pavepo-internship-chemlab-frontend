/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { getBusinessPremisesContacts, getPrimaryContacts } from '@/api';
import { Loader } from '@/components';

import { PrimaryContactDetails } from './PrimaryContactDetails';
import { BusinessPremiseContactDetails } from './BusinessPremiseContactDetails';

const ContactsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: primaryContacts,
    isLoading: isLoadingPrimaryContacts,
    isError: isErrorPrimaryContacts,
  } = useQuery(['primary-contacts', i18n.language], () => getPrimaryContacts(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    data: businessPremisesContacts,
    isLoading: isLoadingBusinessPremisesContacts,
    isError: isErrorBusinessPremisesContacts,
  } = useQuery(['business-premises-contacts', i18n.language], () => getBusinessPremisesContacts(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoadingPrimaryContacts || isLoadingBusinessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isErrorPrimaryContacts || !primaryContacts || isErrorBusinessPremisesContacts || !businessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-10 lg:gap-16 xl:gap-24 2xl:gap-30">
      <div className="flex flex-col gap-4 sm:gap-8">
        {primaryContacts.map(contact => (
          <PrimaryContactDetails
            key={contact.id}
            label={`${t('contacts.contacts')} | ${contact.label}`}
            address={contact.address}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
          />
        ))}
      </div>
      <div className="flex flex-col xl:flex-row gap-5">
        {businessPremisesContacts.map(contact => (
          <div key={contact.id} className="flex-1 min-w-0">
            <BusinessPremiseContactDetails
              image={contact.image}
              label={contact.label}
              address={contact.address}
              phoneNumber={contact.phoneNumber}
              email={contact.email}
              orderPassPhoneNumbers={contact.orderPassPhoneNumbers}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ContactsSection };
