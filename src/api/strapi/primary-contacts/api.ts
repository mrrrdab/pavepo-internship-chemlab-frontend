import { GetPrimatyContactsDTO } from './dto';

const getPrimaryContacts = async (locale: string): Promise<GetPrimatyContactsDTO[]> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/primary-contacts?locale=${locale}&populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch primary contacts. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const primaryContacts: GetPrimatyContactsDTO[] = data.map((contact: any) => ({
    id: contact.id,
    label: contact.attributes.label,
    address: contact.attributes.address,
    phoneNumber: contact.attributes.phoneNumber,
    email: contact.attributes.email,
  }));

  return primaryContacts;
};

export { getPrimaryContacts };
