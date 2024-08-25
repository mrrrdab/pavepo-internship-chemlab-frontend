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
    <Card className="border border-black rounded-xl flex h-full">
      <div className="flex flex-col gap-8 w-2/3 px-5 py-6">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">{label}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-2xl">Адрес:</h4>
            <p className="text-xl">{address}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-2xl">Телефон:</h4>
            <a href={`tel: ${phoneNumber}`} className="text-xl hover:text-neutral-600 underline">
              {phoneNumber}
            </a>
          </div>
          {email && (
            <div className="flex flex-col gap-2.5">
              <h4 className="text-2xl">Email:</h4>
              <a href={`mailto: ${email}`} className="text-xl hover:text-neutral-600">
                {email}
              </a>
            </div>
          )}
          {orderPassPhoneNumbers && (
            <div className="flex flex-col gap-2.5">
              <h4 className="text-2xl">Телефон для заказа пропуска:</h4>
              <div className="flex gap-2">
                {orderPassPhoneNumbers.map((phone, index, orderPassPhoneNumbers) => (
                  <div key={phone.id} className="text-xl">
                    <a href={`tel:${phone.phone}`} className="hover:text-neutral-600 underline">
                      {phone.phone}
                    </a>
                    {index < orderPassPhoneNumbers.length - 1 && <span>, </span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
      <div className="w-1/3">
        <img src={image} alt={label} className="rounded-xl h-full w-full object-cover" />
      </div>
    </Card>
  );
};

export { BusinessPremiseContactItem };
