import { GetDepartmentsContactDTO } from './dto';

const getDepartmentsContacts = async (locale: string): Promise<GetDepartmentsContactDTO[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/departments-contacts?&populate=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch departments contacts. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const departmentsContacts: GetDepartmentsContactDTO[] = data.map((item: any) => ({
    id: item.id,
    label: item.attributes.label,
    phoneNumber: item.attributes.phoneNumber,
    extensionPhoneNumbers: item.attributes.extensionPhoneNumbers.map((contact: any) => ({
      id: contact.id,
      phoneNumber: contact.phoneNumber,
    })),
    email: item.attributes.email,
  }));

  return departmentsContacts;
};

export { getDepartmentsContacts };
