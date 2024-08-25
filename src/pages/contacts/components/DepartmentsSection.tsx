import React from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import { getDepartmentsContacts } from '@/api';

import { DepartmentCollapse } from './DepartmentCollapse';

// TODO
const DepartmentsSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: departments,
  } = useQuery(['department-contacts'], () => getDepartmentsContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <section>
      <h2 className="text-5xl mb-16">Департаменты</h2>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
        </div>
      ) : isError ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-2xl">Ошибка загрузки контаков</p>
        </div>
      ) : (
        departments && (
          <div className="grid grid-cols-2 gap-5">
            {departments.map(contact => (
              <DepartmentCollapse
                key={contact.id}
                label={contact.label}
                phoneNumber={contact.phoneNumber}
                extensionPhoneNumbers={contact.extensionPhoneNumbers}
                email={contact.email}
              />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export { DepartmentsSection };
