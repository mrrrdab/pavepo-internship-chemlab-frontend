import React from 'react';

import { BusinessPremiseContact } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components';

type BusinessPremiseContactItemProps = Pick<
  BusinessPremiseContact,
  'label' | 'image' | 'address' | 'phoneNumber' | 'email' | 'orderPassPhoneNumbers'
>;

const BusinessPremiseContactItem: React.FC<BusinessPremiseContactItemProps> = ({
  label,
  image,
  address,
  phoneNumber,
  email,
  orderPassPhoneNumbers,
}) => {
  return (
    <Card className="border border-black rounded-xl flex flex-col xl:flex-row h-full overflow-hidden">
      <div className="flex flex-col gap-8 w-2/3 px-5 py-6">
        <CardHeader>
          <CardTitle className="text-xl 2xl:text-2xl font-medium">{label}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">Адрес:</h4>
            <p className="text-base 2xl:text-xl">{address}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xl 2xl:text-2xl">Телефон:</h4>
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
          {orderPassPhoneNumbers.length !== 0 && (
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xl 2xl:text-2xl">Телефоны для заказа пропуска:</h4>
              {orderPassPhoneNumbers && (
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
              )}
            </div>
          )}
        </CardContent>
      </div>
      <div className="h-56 xl:h-auto xl:w-1/3">
        <img src={image.url} alt={label} className="rounded-xl h-full w-full object-cover" />
      </div>
    </Card>
  );
};

export { BusinessPremiseContactItem };
