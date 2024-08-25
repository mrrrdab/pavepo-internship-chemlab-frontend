import React from 'react';

import { Contact } from '@/types';

type ContactDetailsItemProps = Pick<Contact, 'label' | 'address' | 'phoneNumber' | 'email'>;

const ContactDetailsItem: React.FC<ContactDetailsItemProps> = ({ label, address, phoneNumber, email }) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-5xl">{label}</h2>
      <div className="flex items-start gap-36">
        <div className="basis-1/3 flex flex-col gap-2.5">
          <h4 className="text-2xl">Адрес:</h4>
          <p className="text-xl">{address}</p>
        </div>
        <div className="basis-1/6 flex flex-col gap-2.5">
          <h4 className="text-2xl">Телефон:</h4>
          <a href={`tel: ${phoneNumber}`} className="text-xl underline">
            {phoneNumber}
          </a>
        </div>
        <div className="basis-1/6 flex flex-col gap-2.5">
          <h4 className="text-2xl">Email:</h4>
          <a href={`mailto: ${email}`} className="text-xl">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export { ContactDetailsItem };
