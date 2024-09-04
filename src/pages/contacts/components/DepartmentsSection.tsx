import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { getDepartmentsContacts } from '@/api';
import { Loader } from '@/components';

import { DepartmentCollapse } from './DepartmentCollapse';

const DepartmentsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: departmentsContacts,
    isLoading,
    isError,
  } = useQuery(['departments-contacts', i18n.language], () => getDepartmentsContacts(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !departmentsContacts) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{t('contacts_page.departments_title')}</h2>
      <div className="hidden xl:flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          {departmentsContacts.slice(0, departmentsContacts.length / 2).map(contact => (
            <DepartmentCollapse
              key={contact.id}
              label={contact.label}
              phoneNumber={contact.phoneNumber}
              extensionPhoneNumbers={contact.extensionPhoneNumbers}
              email={contact.email}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          {departmentsContacts.slice(departmentsContacts.length / 2).map(contact => (
            <DepartmentCollapse
              key={contact.id}
              label={contact.label}
              phoneNumber={contact.phoneNumber}
              extensionPhoneNumbers={contact.extensionPhoneNumbers}
              email={contact.email}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2.5 xl:hidden">
        {departmentsContacts.map(contact => (
          <DepartmentCollapse
            key={contact.id}
            label={contact.label}
            phoneNumber={contact.phoneNumber}
            extensionPhoneNumbers={contact.extensionPhoneNumbers}
            email={contact.email}
          />
        ))}
      </div>
    </section>
  );
};

export { DepartmentsSection };
