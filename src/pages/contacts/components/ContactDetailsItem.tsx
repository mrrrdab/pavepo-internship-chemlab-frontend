import React from 'react';

import { Contact } from '@/types';

type ContactDetailsItemProps = Pick<Contact, 'label' | 'address' | 'phoneNumber' | 'email'>;

const ContactDetailsItem: React.FC<ContactDetailsItemProps> = ({ label, address, phoneNumber, email }) => {
  return (
    <div className="border border-black xl:border-none px-6 py-5 xl:p-0 rounded-lg flex flex-col overflow-hidden">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{label}</h2>
      <div className="flex flex-col gap-5 xl:flex-row items-start xl:gap-36">
        <div className="basis-1/3 flex flex-col gap-2.5">
          <h4 className="text-xl 2xl:text-2xl">Адрес:</h4>
          <p className="text-base 2xl:text-xl">{address}</p>
        </div>
        <div className="basis-1/6 flex flex-col gap-2.5">
          <h4 className="text-xl 2xl:text-2xl">Телефон:</h4>
          <a href={`tel: ${phoneNumber}`} className="text-base 2xl:text-xl hover:text-neutral-600 underline">
            {phoneNumber}
          </a>
        </div>
        <div className="basis-1/6 flex flex-col gap-2.5">
          <h4 className="text-xl 2xl:text-2xl">Email:</h4>
          <a href={`mailto: ${email}`} className="text-base 2xl:text-xl hover:text-neutral-600">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export { ContactDetailsItem };
