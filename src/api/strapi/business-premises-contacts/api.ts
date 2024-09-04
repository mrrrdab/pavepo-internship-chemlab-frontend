/* eslint-disable max-len */
import { GetBusinessPremisesContactDTO } from './dto';

const getBusinessPremisesContacts = async (locale: string): Promise<GetBusinessPremisesContactDTO[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/business-premises-contacts?locale=${locale}&populate[image]=*&populate[orderPassPhoneNumbers]=*`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch business premises contacts. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const businessPremisesContacts: GetBusinessPremisesContactDTO[] = data.map((item: any) => ({
    id: item.id,
    image: {
      url: `${import.meta.env.VITE_CMS_DOMAIN}${item.attributes.image.data.attributes.url}`,
      alt: item.attributes.image.data.attributes.alternativeText || '',
    },
    label: item.attributes.label,
    address: item.attributes.address,
    phoneNumber: item.attributes.phoneNumber,
    email: item.attributes.email,
    orderPassPhoneNumbers: item.attributes.orderPassPhoneNumbers.map((contact: any) => ({
      id: contact.id,
      label: contact.label,
      phoneNumber: contact.phoneNumber,
    })),
  }));

  return businessPremisesContacts;
};

export { getBusinessPremisesContacts };
