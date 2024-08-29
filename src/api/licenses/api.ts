import { GetLicensesDTO } from './dto';
import { PaginationQueryParams } from '../common';

const getAllLicenses = async (params: PaginationQueryParams): Promise<GetLicensesDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/licenses`);

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch licenses. Status: ${response.status}`);
  }

  return await response.json();
};

export { getAllLicenses };
