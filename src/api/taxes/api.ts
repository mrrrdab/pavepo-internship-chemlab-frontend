import { GetTaxesDTO } from './dto';

const getTaxes = async (): Promise<GetTaxesDTO> => {
  const response = await fetch(import.meta.env.VITE_TAXES_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch taxes. Status: ${response.status}`);
  }

  return await response.json();
};

export { getTaxes };
