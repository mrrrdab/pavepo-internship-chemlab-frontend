import { GetSpecialOfferDTO, GetSpecialOffersDTO } from './dto';
import { GetProductsQueryParams } from '../types';

const getSpecialOffer = async (id: string): Promise<GetSpecialOfferDTO> => {
  const response = await fetch(`${import.meta.env.VITE_SPECIAL_OFFERS_API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }

  return await response.json();
};

const getSpecialOffers = async (params: GetProductsQueryParams): Promise<GetSpecialOffersDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_SPECIAL_OFFERS_API_URL}?_page=${params.page}&_limit=${params.limit}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }

  const totalCount = response.headers.get('X-Total-Count');
  const data = await response.json();

  return { products: data, totalCount: Number(totalCount) };
};

export { getSpecialOffer, getSpecialOffers };
