/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import { getBusinessPremisesContacts, getContacts } from '@/api';

import { ContactDetailsItem } from './ContactDetailsItem';
import { BusinessPremiseContactItem } from './BusinessPremiseContactItem';

const PrimaryContactsSection: React.FC = () => {
  const {
    isLoading: isLoadingContacts,
    isError: isErrorContacts,
    data: contacts,
  } = useQuery(['contacts'], () => getContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    isLoading: isLoadingBusinessPremisesContacts,
    isError: isErrorBusinessPremisesContacts,
    data: businessPremisesContacts,
  } = useQuery(['business-premises-contacts'], () => getBusinessPremisesContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoadingContacts || isLoadingBusinessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
      </div>
    );
  }

  if (isErrorContacts || isErrorBusinessPremisesContacts) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-2xl">Ошибка загрузки контактов</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-30">
      {contacts && (
        <div className="flex flex-col gap-8">
          {contacts.map(contact => (
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
      {businessPremisesContacts && (
        <div className="flex gap-5">
          {businessPremisesContacts.map(contact => (
            <div key={contact.id} className="flex-1 min-w-0">
              <BusinessPremiseContactItem image={contact.image} label={contact.label}>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-2xl">Адрес:</h4>
                  <p className="text-xl">{contact.address}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-2xl">Телефон:</h4>
                  <a href={`tel: ${contact.phoneNumber}`} className="text-xl underline">
                    {contact.phoneNumber}
                  </a>
                </div>
                {contact.email && (
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-2xl">Email:</h4>
                    <a href={`mailto: ${contact.email}`} className="text-xl">
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.orderPassPhoneNumbers && (
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-2xl">Телефон для заказа пропуска:</h4>
                    <div className="flex gap-2">
                      {contact.orderPassPhoneNumbers.map((phone, index, orderPassPhoneNumbers) => (
                        <div key={phone.id} className="text-xl">
                          <a href={`tel:${phone.phone}`} className="underline">
                            {phone.phone}
                          </a>
                          {index < orderPassPhoneNumbers.length - 1 && <span>, </span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </BusinessPremiseContactItem>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export { PrimaryContactsSection };
