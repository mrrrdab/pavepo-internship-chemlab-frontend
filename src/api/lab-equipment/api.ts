import { GetLabEquipmentProductsDTO } from './dto';
import { GetProductsQueryParams } from './types';

const getLabEquipmentProducts = async (params: GetProductsQueryParams): Promise<GetLabEquipmentProductsDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_LAB_EQUIPMENT_PRODUCTS_API_URL}?_page=${params.page}&_limit=${params.limit}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }

  const totalCount = response.headers.get('X-Total-Count');
  const data = await response.json();

  return { products: data, totalCount: Number(totalCount) };
};

export { getLabEquipmentProducts };
