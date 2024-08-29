/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';

import { getAllBusinessPremisesContacts, getAllPrimaryContacts } from '@/api';
import { Loader } from '@/components';

import { ContactDetailsItem } from './ContactDetailsItem';
import { BusinessPremiseContactItem } from './BusinessPremiseContactItem';

const PrimaryContactsSection: React.FC = () => {
  const {
    isLoading: isLoadingContacts,
    isError: isErrorContacts,
    data: primaryContactsData,
  } = useQuery(['contacts'], () => getAllPrimaryContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    isLoading: isLoadingBusinessPremisesContacts,
    isError: isErrorBusinessPremisesContacts,
    data: businessPremisesContactsData,
  } = useQuery(['business-premises-contacts'], () => getAllBusinessPremisesContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoadingContacts || isLoadingBusinessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isErrorContacts || isErrorBusinessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки контактов</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-10 lg:gap-16 xl:gap-24 2xl:gap-30">
      {primaryContactsData && (
        <div className="flex flex-col gap-4 sm:gap-8">
          {primaryContactsData.data.map(contact => (
            <ContactDetailsItem
              key={contact.id}
              label={`Контакты | ${contact.label}`}
              address={contact.address}
              phoneNumber={contact.phoneNumber}
              email={contact.email}
            />
          ))}
        </div>
      )}
      {businessPremisesContactsData && (
        <div className="flex flex-col xl:flex-row gap-5">
          {businessPremisesContactsData.data.map(contact => (
            <div key={contact.id} className="flex-1 min-w-0">
              <BusinessPremiseContactItem
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
      )}
    </section>
  );
};

export { PrimaryContactsSection };
