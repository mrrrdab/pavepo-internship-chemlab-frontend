import { GetDelivereyOptionsDTO } from './dto';

const getDeliveryOptions = async (): Promise<GetDelivereyOptionsDTO> => {
  const response = await fetch(import.meta.env.VITE_DELIVERY_OPTIONS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch delivery options. Status: ${response.status}`);
  }

  return await response.json();
};

export { getDeliveryOptions };
