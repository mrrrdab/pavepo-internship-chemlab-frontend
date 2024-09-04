import { GetTaxesDTO } from './dto';

const getTaxes = async (): Promise<GetTaxesDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/taxes`);

  if (!response.ok) {
    throw new Error(`Failed to fetch taxes. Status: ${response.status}`);
  }

  return await response.json();
};

export { getTaxes };
