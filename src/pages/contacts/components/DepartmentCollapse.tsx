/* eslint-disable max-len */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import addDarkIcon from '@/assets/icons/add-dark.svg';
import { cn } from '@/utils';
import { Button } from '@/components';
import { GetDepartmentsContactDTO } from '@/api';

type DepartmentCollapseProps = Omit<GetDepartmentsContactDTO, 'id'>;

const DepartmentCollapse: React.FC<DepartmentCollapseProps> = ({
  label,
  phoneNumber,
  extensionPhoneNumbers,
  email,
}) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <Button
        variant="outline"
        size="lg"
        borderRadius="lg"
        className={cn('group flex justify-between items-center w-full', visible ? 'rounded-b-none' : '')}
        onClick={() => setVisible(!visible)}
      >
        <p className="text-xl 2xl:text-2xl">{label}</p>
        <div className="hidden xs:block bg-white border border-black rounded-3xl p-2.5 group-hover:bg-neutral-300">
          <img src={addDarkIcon} alt="Add" />
        </div>
      </Button>
      {visible && (
        <div className="bg-white border border-neutral-900 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center px-5 py-6">
          <div className="flex flex-col gap-1 sm:gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">{t('contacts.phone_number')}:</h4>
            <a href={`tel: ${phoneNumber}`} className="text-base 2xl:text-xl hover:text-neutral-600 underline">
              {phoneNumber}
            </a>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">{t('contacts.extension_phone_numbers')}:</h4>
            <div className="flex gap-2">
              {extensionPhoneNumbers.map((phone, index) => (
                <div key={phone.id} className="text-base 2xl:text-xl">
                  <a href={`tel:${phone.phoneNumber}`} className="hover:text-neutral-600">
                    {phone.phoneNumber}
                  </a>
                  {index < extensionPhoneNumbers.length - 1 && <span>, </span>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">Email:</h4>
            <a href={`mailto: ${email}`} className="text-base 2xl:text-xl hover:text-neutral-600">
              {email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { DepartmentCollapse };
