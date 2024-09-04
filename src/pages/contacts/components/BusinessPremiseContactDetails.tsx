import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components';
import { GetBusinessPremisesContactDTO } from '@/api';

type BusinessPremiseContactDetailsProps = Omit<GetBusinessPremisesContactDTO, 'id'>;

const BusinessPremiseContactDetails: React.FC<BusinessPremiseContactDetailsProps> = ({
  label,
  image,
  address,
  phoneNumber,
  email,
  orderPassPhoneNumbers,
}) => {
  const { t } = useTranslation();

  return (
    <Card className="border border-black rounded-xl flex flex-col xl:flex-row h-full overflow-hidden">
      <div className="flex flex-col gap-8 w-2/3 px-5 py-6">
        <CardHeader>
          <CardTitle className="text-xl 2xl:text-2xl font-medium">{label}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">{t('contacts.address')}:</h4>
            <p className="text-base 2xl:text-xl">{address}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">{t('contacts.phone_number')}:</h4>
            <a href={`tel: ${phoneNumber}`} className="text-base 2xl:text-xl hover:text-neutral-600 underline">
              {phoneNumber}
            </a>
          </div>
          {email && (
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xl 2xl:text-2xl">Email:</h4>
              <a href={`mailto: ${email}`} className="text-base 2xl:text-xl hover:text-neutral-600">
                {email}
              </a>
            </div>
          )}
          {orderPassPhoneNumbers && orderPassPhoneNumbers.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xl 2xl:text-2xl">{t('contacts.order_pass_phone_numbers')}:</h4>
              <div className="flex flex-col gap-2">
                {orderPassPhoneNumbers.map((phone, index, orderPassPhoneNumbers) => (
                  <div key={phone.id} className="text-base 2xl:text-xl">
                    <a href={`tel:${phone.phoneNumber}`} className="hover:text-neutral-600 underline">
                      {phone.phoneNumber}
                    </a>
                    {index < orderPassPhoneNumbers.length - 1 && <span>,</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
      <div className="h-56 xl:h-auto xl:w-1/3">
        <img src={image.url} alt={image.alt} className="rounded-xl h-full w-full object-cover" />
      </div>
    </Card>
  );
};

export { BusinessPremiseContactDetails };
