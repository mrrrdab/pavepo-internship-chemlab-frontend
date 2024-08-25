import { GetBusinessPremisesContactsDTO, GetContactsDTO, GetDepartmentsContactsDTO } from './dto';

const getContacts = async (): Promise<GetContactsDTO> => {
  const response = await fetch(import.meta.env.VITE_CONTACTS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

const getBusinessPremisesContacts = async (): Promise<GetBusinessPremisesContactsDTO> => {
  const response = await fetch(import.meta.env.VITE_BUSINESS_PREMISES_CONTACTS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

const getDepartmentsContacts = async (): Promise<GetDepartmentsContactsDTO> => {
  const response = await fetch(import.meta.env.VITE_DEPARTMENTS_CONTACTS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

export { getContacts, getBusinessPremisesContacts, getDepartmentsContacts };
