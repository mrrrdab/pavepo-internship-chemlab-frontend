import { GetBusinessPremisesContactsDTO, GetContactsDTO, GetDepartmentsContactsDTO } from './dto';

const getAllPrimaryContacts = async (): Promise<GetContactsDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/contacts/primary`);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

const getAllBusinessPremisesContacts = async (): Promise<GetBusinessPremisesContactsDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/contacts/business-premises`);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

const getAllDepartmentsContacts = async (): Promise<GetDepartmentsContactsDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/contacts/departments`);

  if (!response.ok) {
    throw new Error(`Failed to fetch contacts. Status: ${response.status}`);
  }

  return await response.json();
};

export { getAllPrimaryContacts, getAllBusinessPremisesContacts, getAllDepartmentsContacts };
