import { GetLicensesDTO } from './dto';
import { GetLicensesQueryParams } from './types';

const getLicenses = async (params: GetLicensesQueryParams): Promise<GetLicensesDTO> => {
  const response = await fetch(`${import.meta.env.VITE_LICENSES_API_URL}?_limit=${params.limit}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch licenses. Status: ${response.status}`);
  }

  return await response.json();
};

export { getLicenses };
