import React from 'react';
import { useQuery } from 'react-query';

import { getAllDepartmentsContacts } from '@/api';
import { Loader } from '@/components';

import { DepartmentCollapse } from './DepartmentCollapse';

const DepartmentsSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: departmentsContactsData,
  } = useQuery(['department-contacts'], () => getAllDepartmentsContacts(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <section>
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">Департаменты</h2>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки контаков</p>
        </div>
      ) : (
        departmentsContactsData && (
          <React.Fragment>
            <div className="hidden xl:flex gap-5">
              <div className="flex-1 flex flex-col gap-5">
                {departmentsContactsData.data.slice(0, departmentsContactsData.data.length / 2).map(contact => (
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
                {departmentsContactsData.data.slice(departmentsContactsData.data.length / 2).map(contact => (
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
              {departmentsContactsData.data.map(contact => (
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
