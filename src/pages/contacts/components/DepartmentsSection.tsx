import React from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import { getDepartmentsContacts } from '@/api';

import { DepartmentCollapse } from './DepartmentCollapse';

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
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">Департаменты</h2>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
        </div>
      ) : isError ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки контаков</p>
        </div>
      ) : (
        departments && (
          <React.Fragment>
            <div className="hidden xl:flex gap-5">
              <div className="flex-1 flex flex-col gap-5">
                {departments.slice(0, departments.length / 2).map(contact => (
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
                {departments.slice(departments.length / 2).map(contact => (
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
          </React.Fragment>
        )
      )}
    </section>
  );
};

export { DepartmentsSection };
