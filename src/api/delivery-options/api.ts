import { GetDelivereyOptionsDTO } from './dto';

const getAllDeliveryOptions = async (): Promise<GetDelivereyOptionsDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/delivery-options`);

  if (!response.ok) {
    throw new Error(`Failed to fetch delivery options. Status: ${response.status}`);
  }

  return await response.json();
};

export { getAllDeliveryOptions };
