import { GetLicensesDTO } from './dto';

const getLicenses = async (): Promise<GetLicensesDTO> => {
  const response = await fetch(`${import.meta.env.VITE_LICENSES_API_URL}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch licenses. Status: ${response.status}`);
  }

  return await response.json();
};

export { getLicenses };
